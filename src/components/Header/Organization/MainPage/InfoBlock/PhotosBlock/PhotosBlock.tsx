import React, {ChangeEvent, memo, useState} from 'react';

import style from './PhotosBlock.module.scss'

import {useDispatch, useSelector} from "react-redux";

import {AppRootReducerType} from "../../../../../../redux/store";
import {savePhotoTC} from "../../../../../../redux/companies-reducer";

import OnePhotoBlock from "./OnePhotoBlock/OnePhotoBlock";
import add from "../../../../../../common/icons/Add.svg";
import {selectors} from "../../../../../../selectors/selectors";
import {PhotoDataType} from "../../../../../../types/reducers-types/companiesReducerTypes";


const PhotosBlock = memo(() => {

    const dispatch: any = useDispatch();

    const photosArray = useSelector<AppRootReducerType, PhotoDataType[]>(selectors.getPhotosDataSelectors);

    const [inputValue, setInputValue] = useState<any>(undefined);

    const onPhotoSelectedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e)
        if (e.target.files) {
            dispatch(savePhotoTC(e.target.files[0]))
            //зачищаем путь инпута, чтобы можно было выбрать тот же файл повторно:
            setInputValue("")
        }
    };

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
            <label className={style.goBackButton} htmlFor="input__file">
                <img style={{marginLeft: "14px"}} src={add} alt={"Добавить изображение"}/>
                <span className={style.goBackButtonName}>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
            </label>
            <input value={inputValue} onChange={onPhotoSelectedChange} type="file" accept="image/*" id={"input__file"}
                   style={{visibility: "hidden"}}/>
        </div>
    );
});

export default PhotosBlock;
