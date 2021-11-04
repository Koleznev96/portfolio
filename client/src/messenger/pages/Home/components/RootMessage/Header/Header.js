import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {usePopupAuth} from "../../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../../hooks/useProfile";
import {useChat} from "../../../../../hooks/useChat";


export const Header = () => {
    const chat = useChat();
    const profile = useProfile();
    const popupAuth = usePopupAuth();

    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div className={s.avatar}>{chat.activeChat ? (chat.activeChat?.profile?.login ? chat.activeChat?.profile?.login[0] : null) : (chat.profileNew?.login ? chat.profileNew?.login[0] : null)}</div>
                <div className={s.name}>@{chat.activeChat ? (chat.activeChat?.profile?.login ? chat.activeChat?.profile?.login : null) : (chat.profileNew?.login ? chat.profileNew?.login : null)}</div>
            </div>
            <div
                className={s.button}
            >
                <GlobalSvgSelector id="menu_select_set" />
            </div>
        </div>
    );
};
