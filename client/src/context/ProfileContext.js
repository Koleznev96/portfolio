import {createContext} from "react";

function noop(){}

export const ProfileContext = createContext({
    token: null,
    login: null,
    image_url: null,
    error: null,
    clearError: noop,
    loginChange: noop,
    registerChange: noop,
    logoutChange: noop,
    site: null,
    changeSite: noop,
});
