import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';


export const Header = () => {
    const menu_items = [
        {label: 'Главная'},
        {label: 'Курсы'},
        {label: 'Расписание'},
        {label: 'Преподаватели'},
        {label: 'Рассылка'},
        {label: 'Контакты'},
    ];

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.menu}>
                    {menu_items.map(item => <div className={s.menu__item}>{item.label}</div>)}
                </div>
                <div className={s.login}>
                    Зайти в кабинет
                </div>
            </div>
        </header>
    );
};
