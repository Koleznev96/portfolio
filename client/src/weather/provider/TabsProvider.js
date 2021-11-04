import React, {useState} from "react";
import {Tabs, TabsContext} from '../context/TabsContext';

export const TabsProvider = ({children, ...props}) => {
    const [active, setActive] = useState(Tabs[0]);

    const changeTab = (tab) => {
        setActive(tab);
    }

    return <TabsContext.Provider
        value={{
            active,
            changeTab
        }}
        {...props}
    >
        {children}
    </TabsContext.Provider>
}
