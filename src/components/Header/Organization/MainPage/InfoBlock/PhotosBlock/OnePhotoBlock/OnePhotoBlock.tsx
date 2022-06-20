import React, {memo} from 'react';

import style from "./OnePhotoBlock.module.scss";

import deleteIcons from "../../../../../../../common/icons/deleteIcons.svg"

import {useDispatch} from "react-redux";
import {deletePhotoTC} from "../../../../../../../redux/reducers/companies-reducer";
import {OnePhotoBlockPropsType} from "../../../../../../../types/mainPageTypes";

import {COMPANIES_ID} from "../../../../../../../constants";

const OnePhotoBlock = memo(({name, thumbpath}: OnePhotoBlockPropsType) => {

    const dispatch: any = useDispatch()

    const onPhotoDeleteClick = () => {
        dispatch(deletePhotoTC(COMPANIES_ID, name))
    };

    return (
        <div className={style.onePhotoBlock}>
            <div className={style.personalPhotoBox}>
                <img className={style.imgStyle} src={thumbpath}/>
                <button onClick={onPhotoDeleteClick} className={style.downloadPhotoButton}>
                    <img src={deleteIcons} className={style.photoButton}/>
                </button>
            </div>
            <span className={style.photoName}>{name}</span>
            <span className={style.photographingDate}>29 января 1837</span>
        </div>
    );
});

export default OnePhotoBlock;
