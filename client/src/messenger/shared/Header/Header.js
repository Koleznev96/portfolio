import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";


export const Header = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [statusSelect, setStatusSelect] = useState(false);

    const selectStatusHandler = () => {
        setStatusSelect(!statusSelect);
    }

    return (
        <>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.title}>Messenger</div>
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
