import React, {useState} from "react";
import {MenuContext} from '../context/MenuContext';


export const MenuProvider = ({children, ...props}) => {
    const [listOpen, setListOpen] = useState([]);
    const [openChat, setOpenChat] = useState({});
    const [isOpen, setIsOpen] = useState(true);

    const changeOpenChat = (chat) => {
        setOpenChat(chat);
    }

    const changeListOpen = (list) => {
        setListOpen(list);
    }

    const changeOpen = (status) => {
        setIsOpen(status);
    }

    return <MenuContext.Provider
        value={{
            listOpen,
            openChat,
            isOpen,
            changeOpenChat,
            changeListOpen,
            changeOpen,
        }}
        {...props}
    >
        {children}
    </MenuContext.Provider>
}
