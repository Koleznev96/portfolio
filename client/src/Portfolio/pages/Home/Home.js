import React from 'react';
import { Glav } from './components/Glav/Glav';
import s from './Home.module.scss';
import {Headar} from "./components/Headar/Headar";
import {About} from "./components/About/About";
import {Info} from "./components/Info/Info";
import {Works} from "./components/Works/Works";
import {Contact} from "./components/Contact/Contact";
import {Bottom} from "./components/Bottom/Bottom";


export const Home = () => {

    return (
        <div className={s.home}>
            <Glav />
            <Headar />
            <About />
            <Info />
            <Works />
            <Contact />
            <Bottom />
        </div>
    );
};
