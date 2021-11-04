import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.scss';


export const Card = ({ day_data, popupHandler }) => {
    const { day, day_info, icon_id, temp_day, temp_night, info } = day_data;
    return (
        <div className={s.card} onClick={() => popupHandler(day_data)}>
            <div className={s.day}>{day}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};
