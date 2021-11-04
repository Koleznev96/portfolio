import React, {useState, useEffect} from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import {ThisDayItem} from "./ThisDayItem";


export const ThisDayInfo = ({weather}) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.main.pressure} мм ртутного столба - нормальное`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: weather.weather[0].description,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${weather.wind.speed} м/с юго-запад - легкий ветер`,
        },
    ];

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item) => <ThisDayItem item={item} key={item.name} />)}
            </div>
            <img className={s.cloud__img} src={cloud} alt="облако" />
        </div>
    );
};
