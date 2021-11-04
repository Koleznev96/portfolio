import React, {useEffect, useRef, useState} from "react";
import {ChatContext} from '../context/ChatContext';
import {MessengerService} from "../services/MessengerService";
import {useProfile} from "../../hooks/useProfile";
import io from 'socket.io-client';


export const ChatProvider = ({children, ...props}) => {
    const profile = useProfile();
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [profileNew, setProfileNew] = useState(null);
    const [isOpenChat, setIsOpenChat] = useState(false);
    const socketRef = useRef(null);

    const changeIsOpenChat = (status) => {
        setIsOpenChat(status);
    };

    const getMessages = async (chat_id) => {
        if (!profile.token) {
            return null;
        }
        try {
            const data = (await MessengerService.getMessages(chat_id, profile.token)).data;
            global.messanges = data;
            setMessages(data);
        } catch (e) {}
    };

    const changeActiveChat = (chat, user_id = null) => {
        setMessages([]);
        if (chat) {
            global.chat_id = chat._id;
            setActiveChat(chat);
            setProfileNew(null);
            getMessages(chat._id);
        } else {
            setActiveChat(null);
            setProfileNew(user_id);
        }
        setIsOpenChat(true);
    };

    const changeNewMessage = async (messages_new) => {
        try {
            if (!activeChat && profileNew) {
                // http
                // отправка запроса на создание нового чата с сообщением
                const data = (await MessengerService.postNewChat({profile_id: profileNew, message: messages_new}, profile.token)).data;
                setActiveChat(data.chat);
                global.chat_id = data.chat._id;
                setProfileNew(null);
                global.messanges = [{message: messages_new, author: {login: profile.login, _id: 0}}];
                setMessages([{message: messages_new, author: {login: profile.login, _id: 0}}]);
                let new_chats = [...chats];
                new_chats.unshift(data.chat);
                setChats(new_chats);
            } else {
                // http
                // отпровляем сообщение на существующий чат, добовляем сообщение
                const data = (await MessengerService.postNewMessage({chat_id: activeChat._id, message: messages_new}, profile.token)).data;
                let new_messages = [...messages];
                new_messages.push(data);
                global.messanges = new_messages;
                setMessages(new_messages);
                getChats();
            }
        } catch (e) { console.log(e)}
    };

    const getChats = async () => {
        if (!profile.token) {
            return null;
        }
        try {
            const data = (await MessengerService.getChats(profile.token)).data;
            setChats(data.reverse());
        } catch (e) {}
    };

    useEffect(() => {
        global.chat_id = null;
        global.messanges = [];
        getChats();
    }, [profile.token]);

    function helper_chat(data) {
        if (global.chat_id.toString() === data.chat_id.toString()) {
            let new_messages = [...global.messanges];
            new_messages.push(data);
            global.messanges = new_messages;
            setMessages(new_messages);
        }
    }

    useEffect(() => {
        if (!!profile.token) {
            socketRef.current = io('https://koleznev96.herokuapp.com', {
                query: { login: profile.login }
            });
            socketRef.current.on('chat', (data) => {
                getChats();
            });
            socketRef.current.on('message', (data) => {
                getChats();
                helper_chat(data);
            });
            return () => {
                socketRef.current.disconnect();
            };
        }
    }, [profile.token]);

    return <ChatContext.Provider
        value={{
            chats,
            activeChat,
            changeActiveChat,
            messages,
            changeNewMessage,
            isOpenChat,
            changeIsOpenChat,
            profileNew
        }}
        {...props}
    >
        {children}
    </ChatContext.Provider>
}
