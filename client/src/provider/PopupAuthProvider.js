import React, {useState} from "react";
import {PopupAuthContext} from '../context/PopupAuthContext';

export const PopupAuthProvider = ({children, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);

    const change = (status, data=null) => {
        setIsOpen(status);
        setData(data);
    }

    return <PopupAuthContext.Provider
        value={{
            isOpen,
            data,
            change
        }}
        {...props}
    >
        {children}
    </PopupAuthContext.Provider>
}
