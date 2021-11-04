import {createContext} from "react";

function noop(){}

export const ChatContext = createContext({
    chats: null,
    activeChat: null,
    changeActiveChat: noop,
    messages: null,
    changeNewMessage: noop,
    isOpenChat: null,
    changeIsOpenChat: noop,
    profileNew: null,
});
