import React, {useState} from "react";
import {Cities, CityContext} from '../context/CityContext';
import {storage} from "../model/Storage";

export const CityProvider = ({children, ...props}) => {
    const [city, setCity] = useState(storage.getItem('city') || Cities[0]);

    const changeCity = (city_new) => {
        storage.setItem('city', city_new);
        setCity(city_new);
    }

    return <CityContext.Provider
        value={{
            city,
            changeCity
        }}
        {...props}
    >
        {children}
    </CityContext.Provider>
}
