import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Sites.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";
import { Link } from "react-router-dom";


export const Card = ({data, index}) => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();

    // const linkedHandler = () => {
    //     Linking.openURL(data.url).catch(err => console.error('An error occurred', err));
    // }

    const offHandler = () => {
        popupAuth.change(true);
    }

    return (
        <div className={s.card}>
            <div className={s.card__header + ' '
            + (index === 0 ? s.color_one : (index === 1 ? s.color_two : (index === 2 ? s.color_thre : s.color_for)))}>
                <div className={s.name_line}>
                    <div className={s.name}>{data.label}</div>
                    <GlobalSvgSelector id="save" />
                </div>
                <div className={s.visits_today}>{data.visits_today}</div>
                <div className={s.button_line}>
                    <div className={s.const_text}>Today</div>
                    <div
                        className={s.button_off}
                        onClick={() => offHandler()}
                    >turn off</div>
                </div>
            </div>
            <div className={s.root_buttom}>
                <div className={s.description}>{data.description}</div>
                <div className={s.info_line}>
                    <div className={s.visits_all}>{data.visits_all}</div>
                    <Link to={data.url}>
                        <div className={s.button_send}>
                            <GlobalSvgSelector id="arrow_right_set" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
