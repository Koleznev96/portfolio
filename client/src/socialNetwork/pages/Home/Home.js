import React, {useEffect, useState} from 'react';
import { CreatPost } from './components/CreatPost/CreatPost';
import s from './Home.module.scss';
import {Post} from "./components/Post/Post";
import {PostService} from "../../services/PostService";
import {useProfile} from "../../../hooks/useProfile";
import {usePopupAuth} from "../../../hooks/usePopupAuth";


export const Home = () => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [posts, setPosts] = useState([]);

    const uploadHandler = async (text, image) => {
        if (!!profile.token) {
            try {
                const data = (await PostService.postCreatPost({text, date: await new Date(), image}, profile.token)).data;
                let new_posts = [...posts];
                new_posts.unshift(data);
                setPosts(new_posts);
                return true;
            } catch (e) {
                popupAuth.change(true);
            }
        } else {
            popupAuth.change(true);
        }
        return false;
    }

    const getPosts = async () => {
        try {
            const data = (await PostService.getPosts(profile.token)).data;
            setPosts(data.reverse());
        } catch (e) {}
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className={s.home}>
            <CreatPost uploadHandler={uploadHandler}/>

            {posts.map((post, index) => (
                <Post data={post} key={index}/>
            ))}

            <div className={s.block} />
        </div>
    );
};
