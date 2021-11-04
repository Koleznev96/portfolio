import React, {useState} from 'react';
import s from './RootMessage.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";
import {Header} from "./Header/Header";
import {Root} from "./Root/Root";
import {Input} from "./Input/Input";
import {useChat} from "../../../../hooks/useChat";
import {NullChat} from "./NullChat/NullChat";


export const RootMessage = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const chat = useChat();

    return (
        <div className={s.root}>
            {chat.isOpenChat ? (
                <>
                    <Header />
                    <Root />
                    <Input />
                </>
            ) : (
                <NullChat />
            )}
        </div>
    );
};
