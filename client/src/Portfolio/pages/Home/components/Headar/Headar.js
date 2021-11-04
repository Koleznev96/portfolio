import React from 'react';
import s from './Headar.module.scss';
import { animateScroll as scroll } from "react-scroll";
const { innerHeight: height } = window;

const menu_items = [
    "Обо мне",
    "Работы",
    "Оставить письмо",
    "Контакты",
];

const height_header = (menu_item) => {
    switch (menu_item) {
        case "Обо мне":
            return height;
        case "Работы":
            return height + 450;
        default:
            return null;
    }
}

export const Headar = () => {

    const buttonHandler = (menu_item) => {
        let new_height = height_header(menu_item);
        if (!new_height) {
            return scroll.scrollToBottom();
        }
        scroll.scrollTo(height_header(menu_item));
    }

    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div className={s.logo}>Portfolio</div>
            </div>
            <div className={s.wrapper}>
                {menu_items.map(menu_item => (
                    <div
                        key={menu_item}
                        className={s.menu_item}
                        onClick={() => buttonHandler(menu_item)}
                    >{menu_item}</div>
                ))}
            </div>
            <div className={s.wrapper} />
        </div>
    );
};
