import React from 'react';

import style from "./OnePhotoBlock.module.scss";

import deleteIcons from "../../../../../../icons/deleteIcons.svg"

import {useDispatch} from "react-redux";
import {deletePhotoTC} from "../../../../../../redux/companies-reducer";
import {OnePhotoBlockPropsType} from "../../../../../../types/mainPageTypes";

const companiesId = "12"

const OnePhotoBlock = React.memo(({name, thumbpath}: OnePhotoBlockPropsType) => {

    const dispatch: any = useDispatch()

    const onClickPhotoDelete = () => {
        dispatch(deletePhotoTC(companiesId, name))
    };

    return (
        <div className={style.onePhotoBlock}>
            <div className={style.personalPhotoBox}>
                <img className={style.imgStyle} src={thumbpath}/>
                <button onClick={onClickPhotoDelete} className={style.downloadPhotoButton}>
                    <img src={deleteIcons} className={style.photoButton}/>
                </button>
            </div>
            <span className={style.photoName}>{name}</span>
            <span className={style.photographingDate}>29 января 1837</span>
        </div>
    );
});

export default OnePhotoBlock;