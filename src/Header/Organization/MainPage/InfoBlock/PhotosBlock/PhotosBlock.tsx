import React, {useCallback, useEffect, useState} from 'react';
import style from './PhotosBlock.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";
import {PhotoDataType} from "../../../../../redux/companies-reducer";
import OnePhotoBlock from "./OnePhotoBlock/OnePhotoBlock";
import add from "../../../../../icons/Add.svg";

const PhotosBlock = () => {

    const dispatch: any = useDispatch()

    useEffect(() => {
            // dispatch(GetContactsTC("16"))
        }, [dispatch]
    )

    const [isEditMode, setIsEditMode] = useState(false)

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [])

    const onEditMode = () => {
        setIsEditMode(true)
    }

    const photosArray = useSelector<AppRootReducerType, PhotoDataType[]>((state: AppRootReducerType) => state.companies.photos)


    return (

        <div className={style.photosBlock}>
            {/*<ContactDataModal active={isEditMode} setActive={memoizedSetIsEditMode}/>*/}
            <div className={style.photosBlockNameBlock}>
                <div className={style.photosBlockName}>ПРИЛОЖЕННЫЕ ФОТО</div>
            </div>
            <div className={style.photosContainer}>
                <div>
                    {
                        photosArray.map((photoData) => {
                                return <OnePhotoBlock
                                    name={photoData.name}
                                    thumbpath={photoData.thumbpath}/>
                            }
                        )
                    }
                </div>
            </div>

            <button className={style.goBackButton}>
                <img src={add}/>
                <span className={style.goBackButtonName}>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
            </button>



        </div>


    );
};

export default PhotosBlock;