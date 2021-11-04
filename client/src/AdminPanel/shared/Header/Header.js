import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";
import {filterSearch} from "../../model/functional";
import {MenuItems} from "../../context/MenuContext";


const list_button = [
    'Добавить сайт',
    'Удалить сайт',
    'Востановить',
]

export const Header = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [statusSelect, setStatusSelect] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [list_search, set_list_search] = useState(MenuItems);
    const [strSearch, setStrSearch] = useState('');
    const searchChange = (value) => {
        setStrSearch(value);
        set_list_search(filterSearch(MenuItems, value));
    };

    const searchHandler = (status) => {
        setIsSearch(status);
        set_list_search(MenuItems);
        setStrSearch('');
    };

    const selectStatusHandler = () => {
        setStatusSelect(!statusSelect);
    }

    return (
        <>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.title}>AdminPanel</div>
                </div>
                <div className={s.wrapper}>
                    <div className={s.list_button}>
                        {list_button.map(item => (
                            <div className={s.button_item} key={item}>
                                <GlobalSvgSelector id="block" />
                                <div className={s.button_item__text}>{item}</div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={s.search}
                        onClick={() => searchHandler(!isSearch)}
                    >
                        <GlobalSvgSelector id="arrow" />
                        <input
                            className={s.input}
                            placeholder="Поиск..."
                            value={strSearch}
                            onChange={(value) => searchChange(value.target.value)}
                        />
                        <div className={s.button_search}>
                            <GlobalSvgSelector id="search" />
                        </div>

                        {isSearch ? (
                            <div className={s.body_search}>
                                {list_search.map(item => <div key={item.label} className={s.body_search__item}>{item.label}</div>)}
                                {list_search.length === 0 ? (<div className={s.search_error}>Ничего не найдено</div>) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className={s.wrapper}>
                    { !profile.token ? (
                        <div
                            className={s.info__login}
                            onClick={() => popupAuth.change(true)}
                        >
                            <div className={s.avatar}>A</div>
                            <div className={s.button_login}>
                                Авторизоваться
                            </div>
                        </div>
                    ) : (
                        <div
                            className={s.info}
                            onClick={() => selectStatusHandler()}
                        >
                            <div className={s.avatar}>{profile?.login ? profile?.login[0] : null}</div>
                            <div className={s.name}>@{profile?.login}</div>
                            <div className={s.select}>
                                <GlobalSvgSelector id={statusSelect ? 'arrow-let' : 'arrow'}/>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {statusSelect ? (
                <div className={s.select_root}>
                    <div
                        className={s.select_root__item + ' ' + s.select_root__item_delete}
                        onClick={() => {profile.logoutChange(); setStatusSelect(false);}}
                    >
                        Выйти
                    </div>
                </div>
            ) : null}

        </>
    );
};
