import React, {useEffect, useState} from 'react';
import { Body } from './components/Body/Body';
import s from './Home.module.scss';
import {MessengerService} from "../../services/MessengerService";
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";


export const Home = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();

    return (
        <div className={s.home}>
            <Body/>
        </div>
    );
};
