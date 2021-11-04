import React from 'react';
import './styles/index.scss';

import {Bottom} from "./globalComponents/Bottom/Bottom";
import {PopupAuth} from "./globalComponents/PopapAuth/PopupAuth";
import {ProfileProvider} from "./provider/ProfileProvider";
import {PopupAuthProvider} from "./provider/PopupAuthProvider";

import { AppWeather } from './weather/AppWeather';
import {AppSocialNetwork} from "./socialNetwork/AppSocialNetwork";
import {AppMessenger} from "./messenger/AppMessenger";
import {AppAdminPanel} from "./AdminPanel/AppAdminPanel";
import {AppPortfolio} from "./Portfolio/AppPortfolio";
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
            <ProfileProvider>
                <PopupAuthProvider>
                    <PopupAuth />
                    <Switch>
                        <Route path="/portfolio" exact component={AppPortfolio}/>
                        <Route path="/weather" exact component={AppWeather}/>
                        <Route path="/social_network" exact component={AppSocialNetwork}/>
                        <Route path="/messenger" exact component={AppMessenger}/>
                        <Route path="/admin_panel" exact component={AppAdminPanel}/>
                        <Redirect to="/portfolio" />
                    </Switch>
                    <Bottom/>
                </PopupAuthProvider>
            </ProfileProvider>
        </>
    );
}

export default App;
