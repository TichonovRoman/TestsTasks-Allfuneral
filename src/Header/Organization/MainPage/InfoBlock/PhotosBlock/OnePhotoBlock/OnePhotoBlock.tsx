import React from 'react';
import style from "./OnePhotoBlock.module.scss";

export type OnePhotoBlockPropsType = {
    name: string,
    thumbpath: string,
}

const OnePhotoBlock = ({name, thumbpath}: OnePhotoBlockPropsType) => {
    return (
        <div className={style.onePhotoBlock}>
            <img className={style.imgStyle} src={thumbpath}/>
            <span className={style.photoName}>{name}</span>
            <span className={style.photographingDate}>29 января 1837</span>
        </div>
    );
};

export default OnePhotoBlock;