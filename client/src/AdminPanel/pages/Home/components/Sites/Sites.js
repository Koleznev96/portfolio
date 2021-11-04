import React from 'react';
import s from './Sites.module.scss';
import {Card} from './Card';


// const site_list = [
//     {
//         _id: 0,
//         visits_today: 52,
//         visits_all: 136,
//         label: 'My personal Site',
//         description: 'Quis autem vel eum iure reprehenderit, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil.',
//         url: 'http://localhost:300'
//     },
//     {
//         _id: 1,
//         visits_today: 52,
//         visits_all: 136,
//         label: 'My personal Site',
//         description: 'Quis autem vel eum iure reprehenderit, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil.',
//         url: 'http://localhost:300'
//     },
//     {
//         _id: 2,
//         visits_today: 52,
//         visits_all: 136,
//         label: 'My personal Site',
//         description: 'Quis autem vel eum iure reprehenderit, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil.',
//         url: 'http://localhost:300'
//     },
//     {
//         _id: 3,
//         visits_today: 52,
//         visits_all: 136,
//         label: 'My personal Site',
//         description: 'Quis autem vel eum iure reprehenderit, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil.',
//         url: 'http://localhost:300'
//     },
// ]

export const Sites = ({site_list}) => {

    return (
        <div className={s.root}>
            {site_list.map((site, index) => (
                <Card data={site} key={site._id} index={index} />
            ))}
        </div>
    );
};
