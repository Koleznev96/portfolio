import React, {useState} from 'react';

import s from './Days.module.scss';
import {Tabs as TabsList} from '../../../../context/TabsContext';
import {useTabs} from "../../../../hooks/useTabs";


export const Tabs = () => {
    const tabs = useTabs();

    const tabHandler = (tab) => {
        tabs.changeTab(tab);
    }

    const clearHandler = () => {
        tabs.changeTab(TabsList[0]);
    }

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {TabsList.map(tab =>
                    <div
                        className={s.tab + (tabs.active.value === tab.value ? (' ' + s.active) : '')}
                        key={tab.value}
                        onClick={() => tabHandler(tab)}

                    >
                        {tab.value}
                    </div>
                )}
            </div>
            <div
                className={s.cancel}
                onClick={() => clearHandler()}
            >
                Отменить
            </div>
        </div>
    );
};
