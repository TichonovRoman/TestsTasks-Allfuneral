import React from 'react';
import style from './InfoBlock.module.scss';
import InfoBlockName from "./InfoBlockName/InfoBlockName";


const InfoBlock = () => {

    //отдельно вынести селекторы

    return (
        <div className={style.infoBlock}>

            <InfoBlockName/>

            <div className={style.burialBlock}></div>

           <div className={style.contactsBlock}></div>
            <div className={style.photoBlock}></div>


        </div>
    );
}

export default InfoBlock;
