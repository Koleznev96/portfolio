import React, {useEffect} from 'react';
// import './styles/weather.module.scss';
import s from './styles/weather.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import {Popup} from "./shared/Popup/Popup";
import {ThemeProvider} from "./provider/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {CityProvider} from "./provider/CityProvider";
import {PopupProvider} from "./provider/PopupProvider";
import {RootService} from "../services/RootService";
import {useProfile} from "../hooks/useProfile";


export const AppWeather = () => {
    const profile = useProfile();

    useEffect(() => {
        RootService.postVisit({label: 'Site Weather'});
        profile.changeSite('weather');
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <CityProvider>
                    <PopupProvider>
                        <div className={s.global_container}>
                            <Popup />
                            <div className={s.container}>
                                <Header />
                                <Home />
                            </div>
                        </div>
                    </PopupProvider>
                </CityProvider>
            </ThemeProvider>
        </Provider>
    );
}
