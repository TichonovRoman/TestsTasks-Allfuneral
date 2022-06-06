import React, {useEffect, useState} from 'react';
import style from './MainPageMenuAction.module.scss';
import strelka from "../../../../icons/Strelka.svg"
import linkedIcons from "../../../../icons/mainButtonGroup/Linked.svg"
import rotationIcons from "../../../../icons/mainButtonGroup/Rotation.svg"
import trashIcons from "../../../../icons/mainButtonGroup/Trash.svg"
import {useDispatch} from "react-redux";
import {SetCompaniesTC} from "../../../../redux/companies-reducer";
import ModalDeleteInfo from "./ModalDeleteInfo/ModalDeleteInfo";

const MainPageMenuAction = () => {
    const dispatch:any = useDispatch()

    const updateData = () => dispatch(SetCompaniesTC())

    const [isActiveModal, setIsActiveModal] = useState<boolean>(false)

    const onActiveModal = () => setIsActiveModal(true)

    return (
        <div className={style.mainPageMenuAction}>
            {isActiveModal && <ModalDeleteInfo active={isActiveModal} setActive={setIsActiveModal}/>}

            <button className={style.goBackButton}>
                <img src={strelka}/>
                <span className={style.goBackButtonName}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </button>
            <div className={style.mainButtonGroup}>
                <button
                    title={"Поделиться"}
                    className={style.mainButton}>
                    <img
                        className={style.mainButtonIcons}
                        src={linkedIcons}/>
                </button>
                <button
                    title={"Обновить данные"}
                    className={style.mainButton}
                    onClick={updateData}
                >
                    <img
                        className={style.mainButtonIcons}
                         src={rotationIcons}

                    />
                </button>
                <button
                    title={"Удалить карточку"}
                    className={style.mainButton}
                    onClick={onActiveModal}
                >
                    <img className={style.mainButtonIcons} src={trashIcons}/>
                </button>
            </div>


        </div>


    );
}

export default MainPageMenuAction;
