import React, {memo, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import style from './ContactData.module.scss'

import editIcon from "common/icons/EditIcon.svg";

import {AppRootReducerType} from "redux/store";
import {ContactsStateType} from "types/reducers-types/contactsReducerTypes";

import {GetContactsTC} from "redux/contacts-reducer";

import ContactDataModal from "./ContactDataModal/ContactDataModal";

import {selectors} from "selectors/selectors";

import {CONTACTS_ID} from "constants/index";


const ContactData = memo(() => {

    const dispatch: any = useDispatch()

    const {lastname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState)
    const {firstname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState)
    const {patronymic} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState)
    const {phone} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState)
    const {email} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState)

    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(() => {
            dispatch(GetContactsTC(CONTACTS_ID))
        }, [dispatch]
    )

    const finishFormattedPhoneNumber = `+7 
    (${phone.substring(1, 4)}) 
    ${phone.substring(4, 7)}
    -${phone.substring(7, 9)}
    -${phone.substring(9, 11)}`

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [])
    const onEditModeClick = () => {
        setIsEditMode(true)
    }

    return (

        <div className={style.burialBlock}>
            {
                isEditMode && <ContactDataModal active={isEditMode} setActive={memoizedSetIsEditMode}/>
            }
            <div className={style.burialBlockNameBlock}>
                <div className={style.burialBlockName}>КОНТАКТНЫЕ ДАННЫЕ</div>

                <button
                    title={"Редактировать контактные данные"}
                    className={style.infoBlockNameRedactionButton}
                    onClick={onEditModeClick}>
                    <img src={editIcon}/>
                </button>
            </div>
            <div className={style.companyInformation}>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>ФИО:</div>
                    <span className={style.lineValue}>{lastname} {firstname} {patronymic}</span>
                </div>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Телефон:</div>

                    <div className={style.lineValue}>
                        {finishFormattedPhoneNumber}
                    </div>
                </div>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Эл. почта:</div>
                    <span className={style.lineValue} style={{color: "#82B284", cursor: "pointer"}}>{email}</span>
                </div>
            </div>
        </div>
    );
});

export default ContactData;
