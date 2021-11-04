import React, {useEffect, useState} from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {useMenu} from "../../../../../hooks/useMenu";
import {filterSearch} from "../../../../../model/functional";
import {useChat} from "../../../../../hooks/useChat";


export const Header = ({list_all_profile}) => {
    const menu = useMenu();
    const chat = useChat();
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [list_search, set_list_search] = useState(list_all_profile);

    const searchHandler = (value) => {
        set_list_search(filterSearch(list_all_profile, value));
    };

    const closeHandler = () => {
        setIsSearch(false);
        set_list_search(list_all_profile);
    };

    const menuHandler = (status) => {
        setIsMenu(status);
    };

    useEffect(() => {
        set_list_search(list_all_profile);
    }, [list_all_profile]);

    const profileHandler = (profile) => {
        closeHandler();
        chat.changeActiveChat(null, profile);
    }

    return isSearch ? (
        <>
            <div className={s.search}>
                <div
                    className={s.button}
                    onClick={() => searchHandler()}
                >
                    <GlobalSvgSelector id="search_set" />
                </div>
                <input
                    className={s.search_str}
                    placeholder="Введите login пользователя"
                    onChange={(value) => searchHandler(value.target.value)}
                />
                <div
                    className={s.button}
                    onClick={() => closeHandler()}
                >
                    <GlobalSvgSelector id="clear_set" />
                </div>
            </div>
            <div className={s.scroll_search} >
                {list_search.slice(0, 3).map(item => (
                    <div
                        className={s.profile}
                        key={item._id}
                        onClick={() => profileHandler(item)}
                    >
                        <div className={s.profile__avatar}>{item.login[0]}</div>
                        <div className={s.profile__info__name}>{item.login}</div>
                    </div>
                ))}
                {list_search.length === 0 ? (
                    <div className={s.search_info}>
                        <div className={s.search_error}>Пользователь не найден</div>
                    </div>
                ) : null}
            </div>
        </>
    ) : (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div
                    className={s.button}
                    onClick={() => menu.changeOpen(false)}
                >
                    <GlobalSvgSelector id="menu" />
                </div>
                <div
                    className={s.button}
                    onClick={() => setIsSearch(true)}
                >
                    <GlobalSvgSelector id="search" />
                </div>
            </div>
            {isMenu ? (
                <>
                    <div className={s.menu_button}>
                        <div className={s.wrapper_liner}>
                            <div className={s.block} />
                            <div
                                className={s.button_exit_menu}
                                onClick={() => closeHandler()}
                            >
                                <GlobalSvgSelector id="clear_set" />
                            </div>
                        </div>
                    </div>
                    <div className={s.menu}>

                        <div className={s.menu__item}>Отменить</div>
                    </div>
                </>
            ) : (
                <div
                    className={s.button}
                >
                    <GlobalSvgSelector id="menu_select" />
                </div>
            )}
        </div>
    )
};
