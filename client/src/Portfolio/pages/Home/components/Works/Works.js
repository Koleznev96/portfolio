import React from 'react';
import s from './Works.module.scss';
import siteNetwork from '../../../../assets/images/siteNetwork.png';
import siteWeather from '../../../../assets/images/siteWeather.png';
import siteMessenger from '../../../../assets/images/siteMessenger.png';
import siteAdmin from '../../../../assets/images/siteAdmin.png';
import {Link} from "react-router-dom";


const work_items = [
    {
        image: siteNetwork,
        label: 'Social Network',
        stack: 'React js / Node js',
        url: '/social_network',
    },
    {
        image: siteWeather,
        label: 'App Weather',
        stack: 'React js / Node js',
        url: '/weather',
    },
    {
        image: siteMessenger,
        label: 'App Messenger',
        stack: 'React js / Node js',
        url: '/messenger',
    },
    {
        image: siteAdmin,
        label: 'Admin Panel',
        stack: 'React js / Node js',
        url: '/admin_panel',
    },
]

export const Works = () => {

    return (
        <div className={s.root}>
            <div className={s.header_text}>
                <div className={s.header_info}>Мои проекты</div>
                <div className={s.klop}>
                    <div className={s.hr} />
                </div>
            </div>
            <div className={s.wrapper}>
            <div className={s.body}>
                {work_items.map(workItem => (
                    <Link to={workItem.url} key={workItem.label}>
                    <div className={s.work_item}>
                        <img className={s.site_img} src={workItem.image} />
                        <div className={s.site_info}>
                            <div className={s.label}>{workItem.label}</div>
                            <div className={s.stack}>{workItem.stack}</div>
                            <div className={s.center_button}>
                                <div className={s.button_site}>Посмотреть сайт</div>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            </div>
        </div>
    );
};
