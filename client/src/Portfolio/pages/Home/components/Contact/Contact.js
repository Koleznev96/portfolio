import React, {useState} from 'react';
import s from './Contact.module.scss';
import {PortfolioService} from "../../../../services/PortfolioService";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [okMsg, setOkMsg] = useState('');

    const sendHandler = async () => {
        setOkMsg('');
        setError('');
        try {
            await PortfolioService.postSendMessage({name, email, message});
            setOkMsg('Сообщение отправлено!');
        } catch (e) {
            setError('Ошибка, попробуйте позже');
        }
    }

    return (
        <div className={s.root}>
            <div className={s.header_text}>
                <div className={s.header_info}>CONTACT</div>
                <div className={s.klop}>
                    <div className={s.hr} />
                </div>
                <div className={s.info_text}>У вас есть вопрос или вы хотите работать вместе?</div>
            </div>

            <div className={s.container_contact}>
                <div className={s.form}>
                    <input
                        className={s.form__input}
                        placeholder="Имя"
                        onChange={(value) => setName(value.target.value)}
                    />
                    <input
                        className={s.form__input}
                        placeholder="Ваш Email"
                        onChange={(value) => setEmail(value.target.value)}
                    />
                    <textarea
                        className={s.form__area}
                        placeholder="Сообщение..."
                        onChange={(value) => setMessage(value.target.value)}
                    />
                    <div className={s.form__wrapper}>
                        <div className={s.form__error + (okMsg.length ? (' ' + s.form__ok) : '')}>{okMsg.length ? okMsg : error}</div>
                        <div
                            className={s.form__button_send}
                            onClick={() => sendHandler()}
                        >
                            Отправить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
