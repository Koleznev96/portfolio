import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './shared/Header/Header';
import { Lending } from './pages/Home/Lending';

export const AppComputer = () => {
    return (
        // <div className="container">
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Lending}/>
                <Redirect to="/" />
            </Switch>
        </>
        // </div>
    );
}
