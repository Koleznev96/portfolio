import React, {useEffect, useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';
import {useCity} from "../../../../hooks/useCity";


export const ThisDay = ({ weather }) => {
    const [name_icon_weather, set_name_icon_weather] = useState("");
    const date = new Date();
    const city = useCity();

    useEffect(() => {
        switch(weather.weather[0].main) {
            case 'Clouds':
                set_name_icon_weather("mainly_cloudy");
                break;
            case 'Rain':
                set_name_icon_weather("rain");
                break;
            case 'Clear':
                set_name_icon_weather("rain");
                break;
            case 'small_rain':
                set_name_icon_weather("small_rain");
                break;
            case 'small_rain_sun':
                set_name_icon_weather("small_rain_sun");
                break;
            case 'mainly_cloudy':
                set_name_icon_weather("mainly_cloudy");
                break;
            default:
                break;
        }
    }, [weather])

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wraper}>
                    <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={name_icon_weather} />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>{date.getHours()}:{date.getMinutes()}</span>
                </div>
                <div className={s.this__city}>
                    город: <span>{city.city.label}</span>
                </div>
            </div>
        </div>
    );
};
