import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ListProfile.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";
import {Header} from "./Header/Header";
import ScrollToBottom from 'react-scroll-to-bottom';
import {useChat} from "../../../../hooks/useChat";


export const ListProfile = ({list_profile, list_all_profile}) => {
    const chat = useChat();

    const profileHandler = (chat_data) => {
        chat.changeActiveChat(chat_data, null);
    }

    return (
        <div className={s.root}>

            <Header list_all_profile={list_all_profile} />

            <div className={s.line_hed}>
                <div className={s.button_filter}>
                    <div className={s.button_filter__name}>Сегодня</div>
                    <GlobalSvgSelector id="arrow" />
                </div>
                <div className={s.button_filter}>
                    <div className={s.button_filter__name}>Дата</div>
                    <GlobalSvgSelector id="arrow" />
                </div>
            </div>
            <ScrollToBottom className={s.scroll} >
                {list_profile.map(item => (
                    <div
                        className={s.profile}
                        key={item._id}
                        onClick={() => profileHandler(item)}
                    >
                        <div className={s.profile__avatar}>{item.profile?.login[0]}</div>
                        <div className={s.profile__info}>
                            <div className={s.profile__info__name}>{item.profile?.login}</div>
                            <div className={s.profile__info__message}>{item.message}</div>
                        </div>
                        <div className={s.profile__time}>{item.date}</div>
                    </div>
                ))}
                {list_profile.length === 0 ? (
                    <div className={s.text}>Надите пользователя по логину в поиске</div>
                ) : null}
            </ScrollToBottom>
        </div>

    );
};
