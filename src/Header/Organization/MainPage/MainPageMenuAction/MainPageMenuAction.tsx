import React from 'react';
import style from './MainPageMenuAction.module.scss';
import strelka from "../../../../icons/Strelka.svg"
import linkedIcons from "../../../../icons/mainButtonGroup/Linked.svg"
import rotationIcons from "../../../../icons/mainButtonGroup/Rotation.svg"
import trashIcons from "../../../../icons/mainButtonGroup/Trash.svg"

const MainPageMenuAction = () => {

    return (
        <div className={style.mainPageMenuAction}>
            <button className={style.goBackButton}>
                <img src={strelka}/>
                <span className={style.goBackButtonName}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </button>
            <div className={style.mainButtonGroup}>
                <button className={style.mainButton}>
                    <img className={style.mainButtonIcons} src={linkedIcons}/>
                </button>
                <button className={style.mainButton}>
                    <img className={style.mainButtonIcons} src={rotationIcons}/>
                </button>
                <button className={style.mainButton}>
                    <img className={style.mainButtonIcons} src={trashIcons}/>
                </button>
            </div>


        </div>


    );
}

export default MainPageMenuAction;
