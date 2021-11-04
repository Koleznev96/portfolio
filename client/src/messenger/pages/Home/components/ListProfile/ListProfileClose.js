import React from 'react';
import s from './ListProfile.module.scss';
import ScrollToBottom from 'react-scroll-to-bottom';
import {HeaderClose} from "./Header/HeaderClose";
import {useChat} from "../../../../hooks/useChat";


export const ListProfileClose = ({list_profile}) => {
    const chat = useChat();

    const profileHandler = (chat_data) => {
        chat.changeActiveChat(chat_data);
    }

    return (
        <div className={s.rootClose}>
            <HeaderClose />
            <ScrollToBottom className={s.scroll_close} >
                {list_profile.map(item => (
                    <div
                        className={s.profile}
                        key={item._id}
                        onClick={() => profileHandler(item)}
                    >
                        <div className={s.profile__avatar}>{item.profile.login[0]}</div>
                    </div>
                ))}
            </ScrollToBottom>
        </div>
    );
};
