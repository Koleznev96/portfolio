import React, {useState} from "react";
import {MenuContext} from '../context/MenuContext';

export const MenuProvider = ({children, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const changeIsOpen = (status) => {
        setIsOpen(status)
    }

    const changeActiveIndex = (index) => {
        setActiveIndex(index);
    }

    return <MenuContext.Provider
        value={{
            isOpen,
            activeIndex,
            changeIsOpen,
            changeActiveIndex
        }}
        {...props}
    >
        {children}
    </MenuContext.Provider>
}
