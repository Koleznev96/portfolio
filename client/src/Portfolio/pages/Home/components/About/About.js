import React from 'react';
import s from './About.module.scss';
import {GlobalSvgSelector} from "../../../../../globalAssets/icons/global/GlobalSvgSelector";
import profileImage from "../../../../../globalAssets/images/profile.png";


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
]

export const About = () => {

    return (
        <div className={s.container}>
            <div className={s.open__bottom}>
                <div className={s.open__bottom__wrapper}>
                    <div className={s.header_text}>
                        <div className={s.header_info}>Немного обо мне</div>
                        <div className={s.klop}>
                            <div className={s.hr} />
                        </div>
                    </div>
                </div>
                <div className={s.bottom__body}>
                    <img className={s.profile__img} src={profileImage} alt="@koleznev96" />
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
