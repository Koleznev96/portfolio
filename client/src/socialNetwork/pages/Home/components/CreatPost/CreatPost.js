import React, {useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './CreatPost.module.scss';
import {usePopupAuth} from "../../../../../hooks/usePopupAuth";
import {useProfile} from "../../../../../hooks/useProfile";
import {PostService} from "../../../../services/PostService";


export const CreatPost = ({uploadHandler}) => {
    const profile = useProfile();
    const popupAuth = usePopupAuth();
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const uploadImg = async (event) => {
        if (!!profile.token) {
            const files = event.target.files[0];
            const data = (await PostService.postUploadImage(files, profile.token)).data;
            setImage(data);
        } else {
            popupAuth.change(true);
        }
    }

    const loger = async () => {
        const answer = await uploadHandler(text, image);
        if (answer) {
            setText('');
            setImage(null);
        }
    }

    return (
        <div className={s.root}>
            <div className={s.name}>Create Post</div>
            <textarea
                className={s.input_content}
                placeholder="Enter a caption for your post..."
                onChange={(value) => setText(value.target.value)}
            />
            <div className={s.wrapper}>
                {image ? (
                    <img src={'http://localhost:5000/' + image.url} alt="Social Network" className={s.image}/>
                ) : (
                    <div className={s.button_photo}>
                        <input className={s.step} type="file" name="myImage" onChange={(event) => uploadImg(event)} />
                        <GlobalSvgSelector id="photo"/>
                    </div>
                )}
            </div>
            <div className={s.wrapper}>
                <div className={s.block} />
            <div
                className={s.button_upload + ((text.length !== 0 || image) ? (' ' + s.button_upload_active) : '')}
                onClick={() => (text.length !== 0 || image) ? loger(text, image) : null}
            >
                Upload
            </div>
            </div>
        </div>
    );
};
