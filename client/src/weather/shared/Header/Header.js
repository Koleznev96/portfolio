import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import {useTheme} from "../../hooks/useTheme";
import {useCity} from "../../hooks/useCity";
import {Theme} from "../../context/ThemeContext";
import {Cities} from "../../context/CityContext";


export const Header = () => {
    const theme = useTheme();
    const city = useCity();

    const colorStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' :'rgba(71, 147, 255, 0.2)',
          width: '194px',
          height: '37px',
          border: 'none',
          borderRadius: '10px',
          zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' :'#000',
        }),
    };

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const cityChange = (city_new) => {
        city.changeCity(city_new);
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div
                    className={s.change_theme}
                    onClick={() => changeTheme()}
                >
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                <Select
                    defaultValue={city.city}
                    styles={colorStyles}
                    options={Cities}
                    onChange={(value) => cityChange(value)}
                />
            </div>
        </header>
    );
};
