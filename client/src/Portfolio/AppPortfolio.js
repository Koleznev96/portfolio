import React, {useEffect} from 'react';
import s from './styles/Portfolio.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {RootService} from "../services/RootService";
import {useProfile} from "../hooks/useProfile";


export const AppPortfolio = () => {
    const profile = useProfile();

    useEffect(() => {
        profile.changeSite('portfolio');
        try {
            RootService.postVisit({label: 'Site My Portfolio'});
        } catch (e) {}
    }, []);

    return (
        <div className={s.global_container}>
            <Home />
        </div>
    );
}
