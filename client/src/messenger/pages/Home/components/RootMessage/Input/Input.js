import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './Input.module.scss';
import {usePopupAuth} from "../../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../../hooks/useProfile";
import {useChat} from "../../../../../hooks/useChat";


export const Input = () => {
    const chat = useChat();
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [message, setMessage] = useState('');

    const sendHandler = () => {
        if (!profile.token) {
            popupAuth.change(true);
            return null;
        }
        chat.changeNewMessage(message);
        setMessage('');
    }

    return !!profile.token ? (
        <>
            <div className={s.hr} />
            <div className={s.root}>
                <input
                    className={s.message_str}
                    placeholder="Напишите сообщение..."
                    value={message}
                    onChange={(value) => setMessage(value.target.value)}
                />
                <div className={s.wrapper}>
                    <div className={s.button}>
                        <GlobalSvgSelector id="clip" />
                    </div>
                    <div className={s.button}>
                        <GlobalSvgSelector id="document" />
                    </div>
                    <div className={s.hr_vertically} />
                    <div
                        className={s.button}
                        onClick={() => sendHandler()}
                    >
                        <GlobalSvgSelector id="send" />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className={s.hr} />
            <div className={s.error_root}>
                <div className={s.error}>
                    Для отправки сообщений необходимо
                </div>
                <div className={s.block} />
                <div
                    className={s.error_button}
                    onClick={() => popupAuth.change(true)}
                >
                    Авторизоваться
                </div>
            </div>
        </>
    );
};
