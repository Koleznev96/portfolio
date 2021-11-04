import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {usePopupAuth} from "../../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../../hooks/useProfile";
import {useMenu} from "../../../../../hooks/useMenu";


export const HeaderClose = () => {
    const menu = useMenu();
    const profile = useProfile();
    const popupAuth = usePopupAuth();

    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div
                    className={s.button}
                    onClick={() => menu.changeOpen(true)}
                >
                    <GlobalSvgSelector id="menu" />
                </div>
            </div>
        </div>
    );
};
