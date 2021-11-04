import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Popup.module.scss';
import {ThisDayItem} from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {usePopup} from "../../hooks/usePopup";
import {useCity} from "../../hooks/useCity";


export const Popup = () => {
    const popup = usePopup();
    const city = useCity();

    if (!popup.isOpen) {
        return null;
    }

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(popup.data?.temp_day)}° - ощущается как ${Math.floor(popup.data?.temp_min)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${popup.data?.pressure} мм ртутного столба - нормальное`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: popup.data?.info,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${popup.data?.speed} м/с юго-запад - легкий ветер`,
        },
    ];

    const closeHandler = () => {
        popup.change(false);
    }

    return (
        <>
            <div className={s.blur} onClick={() => closeHandler()}/>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>{popup.data?.temp_day}°</div>
                    <div className={s.day__name}>{popup.data?.day_full}</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id={popup.data?.icon_id} />
                    </div>
                    <div className={s.day__time}>
                        Время: <span>12:00</span>
                    </div>
                    <div className={s.day__city}>
                        город: <span>{city.city.label}</span>
                    </div>
                </div>
                <div className={s.this__day_info_items}>
                    {items.map((item) => <ThisDayItem item={item} key={item.name} />)}
                </div>
                <div className={s.close} onClick={() => closeHandler()}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    );
};
