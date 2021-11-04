import {createContext} from "react";

function noop(){}

export const PopupContext = createContext({
    isOpen: false,
    data: null,
    change: noop,
});
