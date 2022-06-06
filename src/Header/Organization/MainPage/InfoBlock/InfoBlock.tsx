import React from 'react';
import style from './InfoBlock.module.scss';
import InfoBlockName from "./InfoBlockName/InfoBlockName";
import BurialBlock from "./BurialBlock/BurialBlock";


const InfoBlock = () => {

    //отдельно вынести селекторы

    return (
        <div className={style.infoBlock}>

            <InfoBlockName/>
            <BurialBlock/>
           <div className={style.contactsBlock}></div>
            <div className={style.photoBlock}></div>


        </div>
    );
}

export default InfoBlock;
