import {createContext} from "react";

function noop(){}

export const PopupAuthContext = createContext({
    isOpen: false,
    data: null,
    change: noop,
});
