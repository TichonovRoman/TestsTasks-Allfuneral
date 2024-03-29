import React, {memo, useCallback} from 'react';

import style from './MainPageMenuAction.module.scss';

import arrow from "common/icons/Strelka.svg"
import linkedIcons from "common/icons/mainButtonGroup/Linked.svg"
import rotationIcons from "common/icons/mainButtonGroup/Rotation.svg"
import trashIcons from "common/icons/mainButtonGroup/Trash.svg"

import {useDispatch} from "react-redux";

import {setCompaniesTC} from "redux/reducers/companies-reducer";
import ModalDeleteInfo from "./ModalDeleteInfo/ModalDeleteInfo";
import MainPageButtons from "./MainPageButtons/MainPageButtons";

import {getContactsTC} from "redux/reducers/contacts-reducer";

import {CONTACTS_ID} from "constants/index";
import {useIsActiveDeleteModalHook} from "hooks/useInputHook/useIsActiveModalHook";

const MainPageMenuAction = memo(() => {

    const dispatch: any = useDispatch()

    const {isActiveModal, handleActiveModalClick, setIsActiveModal} = useIsActiveDeleteModalHook()

    const handleUpdateDataClick = useCallback(
        () => {
            dispatch(setCompaniesTC())
            dispatch(getContactsTC(CONTACTS_ID))
        }, [dispatch, CONTACTS_ID]
    );
    return (
        <div className={style.mainPageMenuAction}>
            <ModalDeleteInfo active={isActiveModal} setActive={setIsActiveModal}/>

            <button className={style.goBackButton}>
                <img src={arrow} alt={"Icon arrow"}/>
                <span className={style.goBackButtonName}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </button>
            <div className={style.mainButtonGroup}>
                <MainPageButtons title={"Поделиться"}
                                 src={linkedIcons}
                                 alt={"linked"}/>
                <MainPageButtons title={"Обновить данные"}
                                 src={rotationIcons}
                                 alt={"rotation"}
                                 onClick={handleUpdateDataClick}/>
                <MainPageButtons title={"Удалить карточку"}
                                 src={trashIcons}
                                 alt={"delete"}
                                 onClick={handleActiveModalClick}/>
            </div>
        </div>
    );
})

export default MainPageMenuAction;
