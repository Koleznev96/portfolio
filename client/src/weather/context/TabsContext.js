import {createContext} from "react";

function noop(){}

export const Tabs = [
    {value: 'На неделю'},
    {value: 'На 10 дней'},
    {value: 'На месяц'},
];

export const TabsContext = createContext({
    active: Tabs[0],
    changeTab: noop,
});
