import React, {useEffect} from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { Days } from './components/Days/Days';
import s from './Home.module.scss';
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";
import {useCity} from "../../hooks/useCity";
import {TabsProvider} from "../../provider/TabsProvider";


export const Home = () => {
    const dispatch = useCustomDispatch();
    const city = useCity();

    const { weather } = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather(city.city.value));
    }, [city.city]);

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            <TabsProvider>
                <Days />
            </TabsProvider>
            <div className={s.block} />
        </div>
    );
};
