import React, {ChangeEvent, useCallback, useState} from 'react';
import style from './PhotosBlock.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";
import {PhotoDataType, savePhotoTC} from "../../../../../redux/companies-reducer";
import OnePhotoBlock from "./OnePhotoBlock/OnePhotoBlock";
import add from "../../../../../icons/Add.svg";


const PhotosBlock = React.memo(() => {

    const dispatch: any = useDispatch()

    const [isEditMode, setIsEditMode] = useState(false)

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [])

    const onEditMode = () => {
        setIsEditMode(true)
    }

    const photosArray = useSelector<AppRootReducerType, PhotoDataType[]>((state) => state.companies.photosData)

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files) {
         dispatch(savePhotoTC(e.target.files[0]))
        }
    }

    return (

        <div className={style.photosBlock}>
            {/*<ContactDataModal active={isEditMode} setActive={memoizedSetIsEditMode}/>*/}
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
            <input onChange={onPhotoSelected} type="file" accept="image/*" id="input__file"
                   style={{visibility: "hidden"}}/>

            {/*<button className={style.goBackButton}>*/}
            {/*    <img src={add}/>*/}
            {/*    <span className={style.goBackButtonName}>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>*/}
            {/*</button>*/}


        </div>


    );
});

export default PhotosBlock;