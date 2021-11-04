import React, {useEffect} from 'react';
import s from './styles/adminPanel.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import {Menu} from "./shared/Menu/Menu";
import {MenuProvider} from "./provider/MenuProvider";
import {animateScroll as scroll} from "react-scroll";
import {useProfile} from "../hooks/useProfile";


export const AppAdminPanel = () => {
    const profile = useProfile();

    useEffect(() => {
        scroll.scrollToTop();
        profile.changeSite('admin_panel');
    }, [])

    return (
        <MenuProvider>
            <div className={s.global_container}>
                <Header />
                <div className={s.wrapper}>
                    <Menu />
                    <div className={s.container}>
                        <Home />
                    </div>
                </div>
            </div>
        </MenuProvider>
    );
}
