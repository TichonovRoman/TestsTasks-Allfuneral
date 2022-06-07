import React from 'react';
import style from './InfoBlock.module.scss';
import InfoBlockName from "./InfoBlockName/InfoBlockName";
import BurialBlock from "./BurialBlock/BurialBlock";
import ContactData from "./ContactData/ContactData";
import PhotosBlock from "./PhotosBlock/PhotosBlock";


const InfoBlock = () => {

    //отдельно вынести селекторы

    return (
        <div className={style.infoBlock}>
            <InfoBlockName/>
            <BurialBlock/>
            <ContactData/>
            <PhotosBlock/>
        </div>
    );
}

export default InfoBlock;
