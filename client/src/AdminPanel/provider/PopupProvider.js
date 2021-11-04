import React, {useState} from "react";
import {PopupContext} from '../context/PopupContext';

export const PopupProvider = ({children, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);

    const change = (status, data=null) => {
        setIsOpen(status);
        setData(data);
    }

    return <PopupContext.Provider
        value={{
            isOpen,
            data,
            change
        }}
        {...props}
    >
        {children}
    </PopupContext.Provider>
}
