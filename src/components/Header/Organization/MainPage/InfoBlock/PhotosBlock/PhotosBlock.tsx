import React, {memo} from 'react';

import style from './PhotosBlock.module.scss'

import {useSelector} from "react-redux";

import {AppRootReducerType} from "redux/store";
import {PhotoDataType} from "types/reducers-types/companiesReducerTypes";

import OnePhotoBlock from "./OnePhotoBlock/OnePhotoBlock";
import AddPhotoButton from "./AddPhotoButton/AddPhotoButton";

import {selectors} from "selectors/selectors";

const PhotosBlock = memo(() => {

    const photosArray = useSelector<AppRootReducerType, PhotoDataType[]>(selectors.getPhotosDataSelectors);

    return (
        <div className={style.photosBlock}>
            <div className={style.photosBlockNameBlock}>
                <div className={style.photosBlockName}>ПРИЛОЖЕННЫЕ ФОТО</div>
            </div>
            <div className={style.photosContainer}>
                {
                    photosArray.map(({name, thumbpath}) => {
                            const {v4: uuidv4} = require('uuid');
                            return <OnePhotoBlock
                                key={uuidv4()}
                                name={name}
                                thumbpath={thumbpath}/>
                        }
                    )
                }
            </div>
            <AddPhotoButton/>
        </div>
    );
});

export default PhotosBlock;
