import React, {useState, useEffect} from "react";
import {ProfileContext} from '../context/ProfileContext';
import { AuthService } from '../services/AuthService';
import {storage} from '../model/Storage';

export const ProfileProvider = ({children, ...props}) => {
    const [token, setToken] = useState(null);
    const [login, setLogin] = useState(null);
    const [image_url, set_image_url] = useState(null);
    const [error, setError] = useState('');
    const [site, setSite] = useState(null);

    const changeSite = (status) => {
        setSite(status);
    }

    const loginChange = async (data) => {
        try{
            const data_answer = (await AuthService.postLogin(data)).data;
            set_image_url(data_answer.image_url ? data_answer.image_url : null);
            setToken(data_answer.token);
            setLogin(data.login);
            storage.setItem('profile', {
                login: data.login,
                token: data_answer.token,
                image_url: data_answer.image_url
            });
        } catch (e) {
            setError(e);
        }
    };

    const registerChange = async (data) => {
        try{
            const data_answer = (await AuthService.postRegister(data)).data;
            set_image_url(data_answer.image_url);
            setToken(data_answer.token);
            setLogin(data.login);
            storage.setItem('profile', {
                login: data.login,
                token: data_answer.token,
                image_url: data_answer.image_url
            });
        } catch (e) {
            setError(e);
        }
    };

    const logoutChange = () => {
        set_image_url(null);
        setToken(null);
        setLogin(null);
        storage.setItem('profile', null);
    };

    const clearError = () => {
        setError('');
    };

    useEffect(() => {
        const data = storage.getItem('profile');
        if (data) {
            set_image_url(data.image_url);
            setToken(data.token);
            setLogin(data.login);
        }
    }, [])

    return <ProfileContext.Provider
        value={{
            token,
            login,
            image_url,
            error,
            clearError,
            loginChange,
            registerChange,
            logoutChange,
            site,
            changeSite
        }}
        {...props}
    >
        {children}
    </ProfileContext.Provider>
};
