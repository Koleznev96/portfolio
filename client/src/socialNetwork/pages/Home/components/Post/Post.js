import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Post.module.scss';
import {PostService} from "../../../../services/PostService";


export const Post = ({data}) => {
    const {author, date, text, images, _id} = data;
    const [countLike, setCountLike] = useState(data.like);
    const [isLike, setIsLike] = useState(false);

    const likeHandler = async () => {
        if (!isLike) {
            setCountLike(countLike + 1);
        } else {
            setCountLike(countLike - 1);
        }
        await PostService.postLike({_id}, !isLike);
        setIsLike(!isLike);
    }

    return (
        <div className={s.root} key={data._id}>
            <div className={s.wrapper}>
                <div className={s.profile}>
                    <div className={s.profile__avatar}>{author[0]}</div>
                    <div className={s.profile__name}>@{author}</div>
                </div>
                <div className={s.date}>{date}</div>
            </div>
            <div className={s.content_text}>{text}</div>
            <div className={s.content__images}>
                {images?.map(image => <img src={'https://koleznev96.herokuapp.com/' + image} alt="Social Network" className={s.image} key={data._id}/>)}
            </div>
            <div
                className={s.button_like + (isLike ? (' ' + s.button_like_active) : '')}
                onClick={() => likeHandler()}
            >
                <div className={s.button_like__value}>{countLike}</div>
                <GlobalSvgSelector id="like" className={s.button_like__icon}/>
            </div>
        </div>
    );
};
