import React from 'react';
import s from './Glav.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import Background from "../../../../assets/images/background.png";
import {animateScroll as scroll} from "react-scroll";
const { innerHeight: height } = window;

export const Glav = () => {

    const buttonHandler = () => {
        scroll.scrollTo(height);
    }

    return (
        <>
            <img className={s.background} src={Background} />
            <div className={s.root}>
                <div className={s.center}>
                    <div className={s.text_center}>
                        <div className={s.liner}>
                            <div className={s.text}>Меня зовут</div>
                            <div className={s.text_green}>Колезнев Алексей</div>
                        </div>
                        <div className={s.text_option}>Я full-stack web developer</div>
                    </div>
                    <div className={s.wrapper}>
                        <div className={s.button} onClick={() => buttonHandler()}>
                            <div className={s.button__text}>Мои работы</div>
                            <GlobalSvgSelector id="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
