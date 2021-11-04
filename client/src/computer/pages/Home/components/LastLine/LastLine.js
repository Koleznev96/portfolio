import React from 'react';
import s from './LastLine.module.scss';


export const LastLine = () => {
    const data = [
        {
            label: 'Учеников всего:',
            value: '200'
        },
        {
            label: 'Успешно закончили курс:',
            value: '190'
        },
    ]

    return (
        <div className={s.last_line}>
            <div className={s.root}>
                <div className={s.button_order}>Заказать курс</div>
                <div className={s.data}>
                    {data.map(item =>
                        <div className={s.liner}>
                            <div className={s.liner__current}>{item.label}</div>
                            <div className={s.liner__value}>{item.value}</div>
                        </div>
                    )}
                </div>
                <div className={s.data_graph}>
                    <div className={s.liner}>
                        <div className={s.liner__current}>Заработано учениками: </div>
                        <div className={s.liner__value}>400 000₽</div>
                    </div>
                    <div className={s.liner_graph}>
                        <div className={s.liner_graph__current} />
                        <div className={s.liner_graph__total} />
                    </div>
                    <div className={s.value}>
                        <div className={s.value__value} >0</div>
                        <div className={s.value__value} >1 000 000₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
