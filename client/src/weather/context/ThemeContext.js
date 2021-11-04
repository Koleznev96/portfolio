import {createContext} from "react";

function noop(){}

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const ThemeContext = createContext({
    theme: Theme.LIGHT,
    changeTheme: noop,
});
