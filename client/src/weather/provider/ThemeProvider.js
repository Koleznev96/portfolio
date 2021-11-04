import React, {useEffect, useState} from "react";
import {Theme, ThemeContext} from '../context/ThemeContext';
import {changeCssRootVariables} from "../model/changeCssRootVariables";
import {storage} from "../model/Storage";

export const ThemeProvider = ({children, ...props}) => {
    const [theme, setTheme] = useState(
        storage.getItem('theme') || Theme.LIGHT
    );

    const changeTheme = (theme) => {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    useEffect(() => {
        changeCssRootVariables(theme);
    }, []);

    return <ThemeContext.Provider
        value={{
            theme,
            changeTheme
        }}
        {...props}
    >
        {children}
    </ThemeContext.Provider>
}
