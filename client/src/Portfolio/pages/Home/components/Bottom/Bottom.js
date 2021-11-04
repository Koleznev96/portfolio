import React from 'react';
import { GlobalSvgSelector } from '../../../../../globalAssets/icons/global/GlobalSvgSelector';
import s from './Bottom.module.scss';
import { animateScroll as scroll } from "react-scroll";

export const Bottom = () => {

    const bottomHandler = () => {
        scroll.scrollToTop();
    }

    return (
        <div className={s.container}>
            <div className={s.close__bottom}>
                <div className={s.close__bottom__wrapper}>
                    <div className={s.bottom_info}>2021 @koleznev96</div>
                    <div
                        className={s.button_bottom}
                        onClick={() => bottomHandler()}
                    >
                        <GlobalSvgSelector id='button_open' />
                    </div>
                    <div className={s.bottom_info}>koleznev96@vk.com</div>
                </div>
            </div>
        </div>
    );
};
