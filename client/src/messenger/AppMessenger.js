import React, {useEffect} from 'react';
import s from './styles/network.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';

import {MenuProvider} from "./provider/MenuProvider";
import {ChatProvider} from "./provider/ChatProvider";
import {RootService} from "../services/RootService";
import {useProfile} from "../hooks/useProfile";


export const AppMessenger = () => {
    const profile = useProfile();

    useEffect(() => {
        console.log('hhhhhhhhhhhhh')
        RootService.postVisit({label: 'Site Messenger'});
        profile.changeSite('messenger');
    }, []);

    return (
            <MenuProvider>
                <ChatProvider>
                    <div className={s.global_container}>
                        <Header />
                        <div className={s.container}>
                            <Home />
                        </div>
                    </div>
                </ChatProvider>
            </MenuProvider>
    );
}
