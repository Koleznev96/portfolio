import React from 'react';
import s from './Info.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";


const menu_items = [
    {
        label: "Телефон:",
        value: '+7(929)321-44-54'
    },
    {
        label: "Почта:",
        value: 'koleznev96@vk.com'
    },
    {
        label: "Telegram:",
        value: '@koleznev96'
    },
    {
        label: "Опыт:",
        value: 'более 5-ти лет'
    }
]

export const Info = () => {

    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                {menu_items.map(menu_item => (
                    <div className={s.menu_item} key={menu_item.label}>
                        <div className={s.label}>{menu_item.label}</div>
                        <div className={s.value}>{menu_item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
