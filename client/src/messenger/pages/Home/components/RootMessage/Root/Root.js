import React from 'react';
import s from './Root.module.scss';
import {useProfile} from "../../../../../../hooks/useProfile";
import ScrollToBottom from 'react-scroll-to-bottom';
import {useChat} from "../../../../../hooks/useChat";


export const Root = () => {
    const profile = useProfile();
    const chat = useChat();

    return (
        <ScrollToBottom className={s.root}>
            {chat.messages.map(item => {
                if (item.author.login === profile.login) {
                    return (
                        <div className={s.list} key={item._id}>
                            <div className={s.block} />
                            <div className={s.wrapper}>
                                <div className={s.message_my}>{item?.message}</div>
                                <div className={s.avatar}>{item?.author?.login ? item?.author?.login[0] : null}</div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className={s.list} key={item._id}>
                            <div className={s.wrapper}>
                                <div className={s.avatar}>{item?.author?.login ? item?.author?.login[0] : null}</div>
                                <div className={s.message_you}>{item?.message}</div>
                            </div>
                            <div className={s.block} />
                        </div>
                    )
                }
            })}
        </ScrollToBottom>
    );
};
