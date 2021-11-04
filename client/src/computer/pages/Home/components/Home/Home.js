import React from 'react';
import s from './Home.module.scss';
import home from "../../../../assets/images/home.png";


export const Home = () => {
    const cards = [
        {
            value: '18',
            label: 'Дней'
        },
        {
            value: '18',
            label: 'Часов'
        },
        {
            value: '18',
            label: 'Минут'
        },
        {
            value: '18',
            label: 'Секунд'
        },
    ];

    return (
        <>
            <img className={s.home__img} src={home} alt="облако" />
            <div className={s.home}>
                <div className={s.title}>
                    Первый курс по компьютерной сборке
                </div>
                <div className={s.cards}>
                    {cards.map(item =>
                        <div className={s.card}>
                            <div className={s.card__value}>{item.value}</div>
                            <div className={s.card__label}>{item.label}</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
