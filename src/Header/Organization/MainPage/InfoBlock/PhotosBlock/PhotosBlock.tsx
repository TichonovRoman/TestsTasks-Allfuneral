import React, {useCallback, useState} from 'react';
import style from './PhotosBlock.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";
import {PhotoDataType} from "../../../../../redux/companies-reducer";
import OnePhotoBlock from "./OnePhotoBlock/OnePhotoBlock";
import add from "../../../../../icons/Add.svg";

// export const selectPhotosState = (state: AppRootReducerType) => {
//     debugger
//     return state.companies.photos
// }

const PhotosBlock = React.memo(() => {

    const dispatch: any = useDispatch()

    // useEffect(() => {
    //         // dispatch(GetContactsTC("16"))
    //     }, [dispatch]
    // )

    const [isEditMode, setIsEditMode] = useState(false)

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [])

    const onEditMode = () => {
        setIsEditMode(true)
    }

    const photosArray = useSelector<AppRootReducerType, PhotoDataType[]>((state)=>state.companies.photosData)

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

            <button className={style.goBackButton}>
                <img src={add}/>
                <span className={style.goBackButtonName}>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
            </button>


        </div>


    );
});

export default PhotosBlock;