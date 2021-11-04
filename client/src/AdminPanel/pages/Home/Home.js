import React, {useEffect, useState} from 'react';
import { Chart } from './components/Chart/Chart';
import s from './Home.module.scss';
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";
import {Bottom} from "../../shared/Bottom/Bottom";
import {Sites} from "./components/Sites/Sites";
import {Head} from "./components/Head/Head";
import {AdminPanelService} from "../../services/AdminPanelService";


export const Home = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [data_data, set_data_data] = useState({
        sites: [],
        data: [],
        days: [],
    });

    const getData = async () => {
        try {
            const data = (await AdminPanelService.getAllData()).data;
            set_data_data(data);
        } catch (e) {

        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={s.home}>
            <Head />
            <Sites site_list={data_data.sites}/>
            <Chart data={data_data.data} days={data_data.days}/>
            <div className={s.block} />
            <Bottom />
        </div>
    );
};
