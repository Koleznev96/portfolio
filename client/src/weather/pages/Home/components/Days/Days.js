import React, {useEffect, useState} from 'react';
import { Card } from './Card';
import s from './Days.module.scss';
import {Tabs} from "./Tabs";
import {usePopup} from "../../../../hooks/usePopup";
import {useCity} from "../../../../hooks/useCity";
import {fetchWeekWeather} from "../../../../store/thunks/fetchCurrentWeather";
import {initWeekWeather} from "../../../../model/functional";


export const Days = () => {
    const popup = usePopup();
    const city = useCity();
    const [daysInfo, setDaysInfo] = useState([]);

    const popupHandler = (data) => {
        popup.change(true, data);
    }

    const getWeekWeather = async () => {
        const data = (await fetchWeekWeather(city.city.coord)).daily.slice(1, 8);
        setDaysInfo(await initWeekWeather(data));
    }

    useEffect(() => {
        getWeekWeather();
    }, [city.city]);

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {daysInfo.map(day => <Card day_data={day} key={day.day} popupHandler={popupHandler}/>)}
            </div>
        </>
    );
};
