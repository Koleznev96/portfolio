import React, {useEffect, useState} from 'react';
import s from './Chart.module.scss';
import { Line } from "react-chartjs-2";


const colors = [`#FF2927`, `#003BD2`, `#00A844`, `#5A01CA`];

export const Chart = ({data, days}) => {
    const [data_chart, set_data_chart] = useState([]);

    useEffect(() => {
        const data_new = data?.map((item, index) => {
            return {
                ...item,
                borderColor: colors[index],
            }
        });
        set_data_chart(data_new);
    }, [data]);

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Посещение сайтов',
            },
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };


    return (
        <div className={s.root}>
            <Line
                data={{
                    labels: days,
                    datasets: data_chart
                }}
                options={options}
                type='line'
            />
        </div>
    );
};
