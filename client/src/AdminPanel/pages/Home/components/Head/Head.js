import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Head.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";


export const Head = () => {
    return (
        <div className={s.root}>
            <div className={s.name}>Manage all your sites</div>
            <div className={s.wrapper}>
                <div className={s.button_edit}>
                    <GlobalSvgSelector id="micro" />
                    <div className={s.button_edit_name}>Edit layout</div>
                </div>
                <div className={s.button_filter}>
                    <div className={s.button_filter_name}>Filters edit</div>
                </div>
            </div>
        </div>
    );
};
