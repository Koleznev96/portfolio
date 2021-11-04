import React, {useEffect} from 'react';
import s from './styles/network.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import {RootService} from "../services/RootService";
import {useProfile} from "../hooks/useProfile";


export const AppSocialNetwork = () => {
    const profile = useProfile();

    useEffect(() => {
        RootService.postVisit({label: 'Site Social Network'});
        profile.changeSite('social_network');
    }, []);

    return (
        <div className={s.global_container}>
            <Header />
            <div className={s.container}>
                <Home />
            </div>
        </div>
    );
}
