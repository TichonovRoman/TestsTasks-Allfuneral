import React from 'react';
import style from './InfoBlockName.module.scss';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";
import editIcon from "../../../../../icons/EditIcon.svg"


const InfoBlockName = () => {

    //отдельно вынести селекторы

    const infoBlockName = useSelector((state: AppRootReducerType) => state.auth.infoBlockName)

    return (
        <div className={style.infoBlockName}>
            {infoBlockName}


            <button className={style.infoBlockNameRedactionButton}>
                <img src={editIcon}/>
            </button>

        </div>

    );
}

export default InfoBlockName;
