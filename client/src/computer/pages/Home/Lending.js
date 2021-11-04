import React from 'react';
import s from './Home.module.scss';
import {Home} from "./components/Home/Home";
import {LastLine} from "./components/LastLine/LastLine";


export const Lending = () => {
    return (
        <div className={s.container}>
            <Home />
            <LastLine />
        </div>
    );
};
