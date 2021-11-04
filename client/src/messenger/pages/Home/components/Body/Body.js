import React, {useEffect, useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Body.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";
import {ListProfile} from "../ListProfile/ListProfile";
import {RootMessage} from "../RootMessage/RootMessage";
import {useMenu} from "../../../../hooks/useMenu";
import {ListProfileClose} from "../ListProfile/ListProfileClose";
import {MessengerService} from "../../../../services/MessengerService";
import {useChat} from "../../../../hooks/useChat";




const list_profile = [
    {
        login: 'Khalid Hasan Zibon',
        message: 'Sung haw is it going?',
        time: '10:30'
    },
    {
        login: 'Khalid Hasan Zibon',
        message: 'Sung haw is it going?',
        time: '10:30'
    },
    {
        login: 'Khalid Hasan Zibon',
        message: 'Sung haw is it going?',
        time: '10:30'
    },
    {
        login: 'Khalid Hasan Zibon',
        message: 'Sung haw is it going?',
        time: '10:30'
    },
]

export const Body = () => {
    const menu = useMenu();
    const chat = useChat();
    const [list_all_profile, set_list_all_profile] = useState([]);

    const getListAllProfile = async () => {
        const data = (await MessengerService.getAllListProfile()).data;
        set_list_all_profile(data);
    }

    useEffect(() => {
        getListAllProfile();
    }, []);

    return (
        <div className={s.root}>
            {menu.isOpen ?
                <ListProfile list_profile={chat.chats} list_all_profile={list_all_profile}/>
                :
                <ListProfileClose list_profile={chat.chats}/>
            }
            <RootMessage />
        </div>
    );
};
