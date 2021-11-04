import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Menu.module.scss';
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";
import {MenuItems} from "../../context/MenuContext";
import {useMenu} from "../../hooks/useMenu";


export const Menu = () => {
    const menu = useMenu();
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const active_index = 0;

    const menuItemHandler = (item, index) => {
        console.log('eeeeee')
    }

    return menu.isOpen ? (
        <div className={s.menu}>
            <div className={s.wrapper_exit}>
                <div
                    className={s.button_exit}
                    onClick={() => menu.changeIsOpen(false)}
                >
                    <GlobalSvgSelector id="exit" />
                </div>
            </div>
            <div className={s.root_menu}>
                {MenuItems.map((item, index) => (
                    <div className={s.menu_item} key={item.label}>
                        <div className={s.hr + (index === menu.activeIndex ? (' ' + s.hr_active) : '')} />
                        <div
                            className={s.menu_button + (index === menu.activeIndex ? (' ' + s.menu_button_active) : '')}
                            onClick={() => menu.changeActiveIndex(index)}
                        >
                            <GlobalSvgSelector id={index === menu.activeIndex ? "block_active" : "block"} />
                            <div className={s.menu_item_text + (index === menu.activeIndex ? (' ' + s.menu_item_text_active) : '')}>{item.label}</div>
                            {item.items.length !== 0 ? (
                                <GlobalSvgSelector id="arrow" />
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className={s.menu_close}>
            <div className={s.wrapper_exit}>
                <div
                    className={s.button_exit}
                    onClick={() => menu.changeIsOpen(true)}
                >
                    <GlobalSvgSelector id="arrow_right" />
                </div>
            </div>
            <div className={s.root_menu}>
                {MenuItems.map((item, index) => (
                    <div className={s.menu_item} key={item.label}>
                        <div
                            className={s.menu_button_close + (index === menu.activeIndex ? (' ' + s.menu_button_close_active) : '')}
                            onClick={() => menu.changeActiveIndex(index)}
                        >
                            <div className={s.hr + (index === menu.activeIndex ? (' ' + s.hr_active) : '')} />
                            <GlobalSvgSelector id={index === menu.activeIndex ? "block_active" : "block"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
