import React, {useEffect, useState} from 'react';
import { GlobalSvgSelector } from '../../globalAssets/icons/global/GlobalSvgSelector';
import s from './Bottom.module.scss';
import profileImage from "../../globalAssets/images/profile.png";
import {useProfile} from "../../hooks/useProfile";


const stack_list_one = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'Mongodb',
];

const stack_list_two = [
    'ReactNative',
    'Git',
    'HTML',
    'CSS',
];

export const Bottom = () => {
    const profile = useProfile();
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(false);

    const bottomHandler = (status) => {
        setIsOpen(status);
    }

    useEffect(() => {
        if (profile.site === 'admin_panel' || profile.site === 'portfolio') {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [profile.site]);

    if (status) {
        return null;
    }

    if (!isOpen) {
        return (
            <div className={s.container}>
                <div className={s.close__bottom}>
                    <div className={s.close__bottom__wrapper}>
                        <div className={s.bottom_info}>2021 @koleznev96</div>
                        <div
                            className={s.button_bottom}
                            onClick={() => bottomHandler(true)}
                        >
                            <GlobalSvgSelector id='button_open' />
                        </div>
                        <div className={s.bottom_info}>koleznev96@vk.com</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={s.container}>
            <div className={s.open__bottom}>
                <div className={s.open__bottom__wrapper}>
                    <div className={s.bottom_info}>2021 @koleznev96</div>
                    <div
                        className={s.button_bottom_close}
                        onClick={() => bottomHandler(false)}
                    >
                        <GlobalSvgSelector id='button_close' />
                    </div>
                    <div className={s.bottom_info}>koleznev96@vk.com</div>
                </div>
                <div className={s.bottom__body}>
                    <img className={s.profile__img} src={profileImage} alt="@koleznev96" />
                    {/*<div className={s.block} />*/}
                    <div className={s.info}>
                        <div className={s.info__name}>Разработчик веб-приложений</div>
                        <div className={s.info__name_stack}>Стек:</div>
                        <div className={s.info__staks}>
                            {
                                stack_list_one.map(item => (
                                    <div className={s.stack_block} key={item}>
                                        <div className={s.stack_block__name} key={item}>{item}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={s.info__staks}>
                            {
                                stack_list_two.map(item => (
                                    <div className={s.stack_block} key={item}>
                                        <div className={s.stack_block__name} key={item}>{item}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={s.info__info}>
                            <div className={s.info__info__wrapper}>
                                <div className={s.info__info__name}>Телефон:</div>
                                <div className={s.info__info__name}>Telegram:</div>
                            </div>
                            <div className={s.info__info__wrapper}>
                                <div className={s.info__info__value}>+7(929)321-44-54</div>
                                <div className={s.info__info__value}>@koleznev96</div>
                            </div>
                            <div className={s.info__info__wrapper}>
                                <div className={s.info__info__name}>Почта:</div>
                                <div className={s.info__info__name}>Опыт:</div>
                            </div>
                            <div className={s.info__info__wrapper}>
                                <div className={s.info__info__value}>koleznev96@vk.com</div>
                                <div className={s.info__info__value}>более 5-ти лет</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
