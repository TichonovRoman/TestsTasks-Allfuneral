import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MaskedInput from 'react-text-mask'

import styles from "./ContactDataModal.module.scss"
import style from "../ContactData.module.scss";

import {setContactsTC} from "redux/contacts-reducer";
import {selectors} from "selectors/selectors";
import ContactModalRow from "./ContactModalRow/ContactModalRow";

import {AppRootReducerType} from "redux/store";
import {ContactDataModalModalPropsType} from "types/mainPageTypes";
import {ContactsStateType} from "types/reducers-types/contactsReducerTypes";
import {
    useEmailInputHook,
    useFirstnameInputHook,
    useLastNameInputHook,
    usePatronymicInputHook,
    usePhoneNumberInputHook
} from "../../../../../../../hooks/useInputHook/useContactDataInputHook";

const mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const ContactDataModal = memo(({
                                   active,
                                   setActive,
                               }: ContactDataModalModalPropsType) => {
    const dispatch: any = useDispatch();

    const {lastname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState);
    const {firstname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState);
    const {patronymic} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState);
    const {phone} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState);
    const {email} = useSelector<AppRootReducerType, ContactsStateType>(selectors.getSelectContactsState);

    const {changedLastname, handleSetChangedLastnameChange} = useLastNameInputHook(lastname)
    const {changedFirstname, handleSetChangedFirstnameChange} = useFirstnameInputHook(firstname)
    const {changedPatronymic, handleSetChangedPatronymicChange} = usePatronymicInputHook(patronymic)
    const {changedPhoneNumber, handleSetChangedPhoneNumberChange} = usePhoneNumberInputHook(phone)
    const {changedEmail, handleSetChangedEmailChange} = useEmailInputHook(email)

    const onCloseModalClick = () => setActive(false);

    const onContactsEditTCClick = () => {
        const finishPhoneNumber = `7${changedPhoneNumber.replace("(", "")
            .replace(")", "")
            .replace("(", "")
            .replace(" ", "")
            .replace("-", "")}`

        dispatch(setContactsTC({
            "lastname": changedLastname,
            "firstname": changedFirstname,
            "patronymic": changedPatronymic,
            "phone": finishPhoneNumber,
            "email": changedEmail,
        }))
        onCloseModalClick()
    }

    return (
        <div className={active ? `${styles.modalActive} ${styles.modal}` : `${styles.modal}`}
             onClick={onCloseModalClick}>
            <div className={active
                ? `${styles.modalContent} ${styles.modalContentActive}`
                : `${styles.modalContent}`}
                 onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalPageTitle}>Редактирование контактных данных</div>
                <div className={style.companyInformation}>

                    <ContactModalRow value={changedLastname}
                                     name={"Фамилия:"}
                                     callBack={handleSetChangedLastnameChange}/>
                    <ContactModalRow value={changedFirstname}
                                     name={"Имя:"}
                                     callBack={handleSetChangedFirstnameChange}/>
                    <ContactModalRow value={changedPatronymic}
                                     name={"Отчество:"}
                                     callBack={handleSetChangedPatronymicChange}/>

                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Телефон:</div>
                        <span style={{display: "flex"}}>
                            +7
                            <MaskedInput
                                className={styles.fullNameInput}
                                style={{width: "100px", marginLeft: "5px"}}
                                value={changedPhoneNumber}
                                onChange={handleSetChangedPhoneNumberChange}
                                mask={mask}
                            />
                        </span>
                    </div>
                    <ContactModalRow value={changedEmail}
                                     name={"Эл. почта:"}
                                     callBack={handleSetChangedEmailChange}/>
                </div>
                <div className={styles.modalButtonGroup}>
                    <button className={styles.loginSaveButton} onClick={onContactsEditTCClick}>СОХРАНИТЬ</button>
                    <button className={styles.loginCancelButton} onClick={onCloseModalClick}>ОТМЕНА</button>
                </div>
            </div>

        </div>
    );
});

export default ContactDataModal;
