import {createContext} from "react";

function noop(){}

export const MenuItems = [
    {
        label: 'Dashboard',
        items: []
    },
    {
        label: 'Inventory',
        items: [1,2]
    },
    {
        label: 'CRM',
        items: [1,2]
    },
    {
        label: 'Reports',
        items: []
    },
    {
        label: 'Settings',
        items: [1,2]
    },
];

export const MenuContext = createContext({
    isOpen: null,
    activeIndex: null,
    changeIsOpen: noop,
    changeActiveIndex: noop
});
