import React, {useState, useEffect} from 'react';
import { GlobalSvgSelector } from '../../globalAssets/icons/global/GlobalSvgSelector';
import s from './PopupAuth.module.scss';
import {usePopupAuth} from "../../hooks/usePopupAuth";
import {useProfile} from "../../hooks/useProfile";


export const PopupAuth = () => {
    const popupAuth = usePopupAuth();
    const profile = useProfile();
    const [isAuth, setAuth] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!!profile.token) {
            popupAuth.change(false);
        }
    }, [profile.token]);

    if (!popupAuth.isOpen) {
        return null;
    }

    const authHandler = () => {
        if (isAuth) {
            profile.loginChange({login, password});
        } else {
            profile.registerChange({login, password});
        }
    }

    const closeHandler = () => {
        popupAuth.change(false);
    }

    const switchAuthHandler = (status) => {
        setAuth(status);
    }

    return (
        <>
            <div className={s.blur} onClick={() => closeHandler()}/>
            <div className={s.popup}>
                <div className={s.popup__data}>
                    <div className={s.root}>
                        <div className={s.root__name}>Для выполнения этого действия необходимо авторизоваться</div>
                        <div className={s.switch}>
                            <div
                                className={s.switch__item + (isAuth ? (' ' + s.switch__item_active) : '')}
                                onClick={() => switchAuthHandler(true)}
                            >
                                Авторизация
                            </div>
                            <div className={s.switch__set}>/</div>
                            <div
                                className={s.switch__item + (isAuth ? ('') : ' ' + s.switch__item_active)}
                                onClick={() => switchAuthHandler(false)}
                            >
                                Регистрация
                            </div>
                        </div>
                        <input
                            className={s.root__input}
                            placeholder="Login"
                            onChange={(value) => setLogin(value.target.value)}
                        />
                        <input
                            className={s.root__input}
                            placeholder="Password"
                            onChange={(value) => setPassword(value.target.value)}
                        />
                    </div>
                    <div className={s.logo}>
                        <GlobalSvgSelector id='icon_auth' />
                    </div>
                    <div className={s.close} onClick={() => closeHandler()}>
                        <GlobalSvgSelector id="close" />
                    </div>
                </div>
                <div className={s.list_button}>
                    <div
                        className={s.button__auth}
                        onClick={() => authHandler()}
                    >
                        {isAuth ? 'Авторизоваться' : 'Зарегестрироваться'}
                    </div>
                    <div
                        className={s.button__close}
                        onClick={() => closeHandler()}
                    >
                        Отменить
                    </div>
                </div>
            </div>
        </>
    );
};
