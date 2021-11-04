import {createContext} from "react";

function noop(){}

export const Cities = [
    { value: 'Москва', label: 'Москва', coord: {lon: 37.6156, lat: 55.7522}},
    { value: 'Санкт-Петербург', label: 'Санкт-Петербург', coord: {lon: 30.2642, lat: 59.8944}},
    { value: 'Краснодар', label: 'Краснодар', coord: {lon: 38.9769, lat: 45.0328}},
    { value: 'Красноярск', label: 'Красноярск', coord: {lon: 92.7917, lat: 56.0097}},
];

export const CityContext = createContext({
    city: Cities[0],
    changeCity: noop,
});
