import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import style from './ContactData.module.scss'

import editIcon from "../../../../../icons/EditIcon.svg";

import {AppRootReducerType} from "../../../../../redux/store";
import {GetContactsTC} from "../../../../../redux/contacts-reducer";

import ContactDataModal from "./ContactDataModal/ContactDataModal";

import {selectors} from "../../../../../selectors/selectors";
import {ContactsStateType} from "../../../../../types/reducers-types/contactsReducerTypes";


const ContactData = () => {

    const dispatch: any = useDispatch()

    useEffect(() => {
            dispatch(GetContactsTC("16"))
        }, [dispatch]
    )

    const [isEditMode, setIsEditMode] = useState(false)

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [])

    const onEditMode = () => {
        setIsEditMode(true)
    }

    const {lastname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState)
    const {firstname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState)
    const {patronymic} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState)
    const {phone} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState)
    const {email} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState)

    const finishFormattedPhoneNumber = `+7 
    (${phone.substring(1, 4)}) 
    ${phone.substring(4, 7)}
    -${phone.substring(7, 9)}
    -${phone.substring(9, 11)}`


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
                    onClick={onEditMode}>
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
};

export default ContactData;