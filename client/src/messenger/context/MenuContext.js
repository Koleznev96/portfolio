import {createContext} from "react";

function noop(){}

export const MenuContext = createContext({
    listOpen: null,
    openChat: null,
    isOpen: true,
    changeOpenChat: noop,
    changeListOpen: noop,
    changeOpen: noop,
});
