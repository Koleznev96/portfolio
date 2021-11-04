import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './NullChat.module.scss';
import {usePopupAuth} from "../../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../../hooks/useProfile";
import ScrollToBottom from 'react-scroll-to-bottom';


export const NullChat = () => {

    return (
        <div className={s.root}>
            <div className={s.text}>Выберите чат для общения</div>
        </div>
    );
};
