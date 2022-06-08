import React, {useCallback, useState} from 'react';

import style from './MainPageMenuAction.module.scss';

import strelka from "../../../../icons/Strelka.svg"
import linkedIcons from "../../../../icons/mainButtonGroup/Linked.svg"
import rotationIcons from "../../../../icons/mainButtonGroup/Rotation.svg"
import trashIcons from "../../../../icons/mainButtonGroup/Trash.svg"

import {useDispatch} from "react-redux";

import {SetCompaniesTC} from "../../../../redux/companies-reducer";
import ModalDeleteInfo from "./ModalDeleteInfo/ModalDeleteInfo";
import {GetContactsTC} from "../../../../redux/contacts-reducer";
import MainPageButtons from "./MainPageButtons/MainPageButtons";

const contactsId = "16"

const MainPageMenuAction = () => {

    const dispatch: any = useDispatch()

    const updateData = useCallback(
        () => {
            dispatch(SetCompaniesTC())
            dispatch(GetContactsTC(contactsId))
        }, [contactsId]
    );

    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

    const onActiveModal = useCallback(
        () => {setIsActiveModal(true)
        }, []) ;

    return (
        <div className={style.mainPageMenuAction}>
            <ModalDeleteInfo active={isActiveModal} setActive={setIsActiveModal}/>

            <button className={style.goBackButton}>
                <img src={strelka}/>
                <span className={style.goBackButtonName}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </button>
            <div className={style.mainButtonGroup}>
                <MainPageButtons title={"Поделиться"} src={linkedIcons} alt={"linked"}/>
                <MainPageButtons title={"Обновить данные"} src={rotationIcons} alt={"rotation"} onClick={updateData}/>
                <MainPageButtons title={"Удалить карточку"} src={trashIcons} alt={"delete"} onClick={onActiveModal}/>
                </div>
        </div>
    );
}

export default MainPageMenuAction;
