import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MaskedInput from 'react-text-mask'

import styles from "./ContactDataModal.module.scss"
import style from "../ContactData.module.scss";

import {SetContactsTC} from "../../../../../../redux/contacts-reducer";
import {selectors} from "../../../../../../selectors/selectors";
import ContactModalRow from "./ContactModalRow/ContactModalRow";

import {AppRootReducerType} from "../../../../../../redux/store";
import {ContactDataModalModalPropsType} from "../../../../../../types/mainPageTypes";
import {ContactsStateType} from "../../../../../../types/reducers-types/contactsReducerTypes";

const ContactDataModal = React.memo(({
                                         active,
                                         setActive,
                                     }: ContactDataModalModalPropsType) => {
    const dispatch: any = useDispatch();

    const {lastname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState);
    const {firstname} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState);
    const {patronymic} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState);
    const {phone} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState);
    const {email} = useSelector<AppRootReducerType, ContactsStateType>(selectors.selectContactsState);


    const [changedLastname, setChangedLastname] = useState<string>(lastname);
    const [changedFirstname, setChangedFirstname] = useState<string>(firstname);
    const [changedPatronymic, setChangedPatronymic] = useState<string>(patronymic);
    const [changedPhoneNumber, setChangedPhoneNumber] = useState<string>(phone.substring(1, 11));
    const [changedEmail, setChangedEmail] = useState<string>(email);

    const setChangedLastnameHandler = useCallback ((event: ChangeEvent<HTMLInputElement>) =>
        setChangedLastname(event.currentTarget.value),
        [])

    const setChangedFirstnameHandler = useCallback((event: ChangeEvent<HTMLInputElement>) =>
        setChangedFirstname(event.currentTarget.value),
        []);

    const setChangedPatronymicHandler = useCallback((event: ChangeEvent<HTMLInputElement>) =>
        setChangedPatronymic(event.currentTarget.value),
        []);

    const setChangedEmailHandler = useCallback((event1: ChangeEvent<HTMLInputElement>) =>
        setChangedEmail(event1.currentTarget.value),
        []);

    const onClickCloseModal = () => setActive(false);

    const onContactsEditTCHandler = () => {
        const finishPhoneNumber = `7${changedPhoneNumber.replace("(", "")
            .replace(")", "")
            .replace("(", "")
            .replace(" ", "")
            .replace("-", "")}`

        dispatch(SetContactsTC({
            "lastname": changedLastname,
            "firstname": changedFirstname,
            "patronymic": changedPatronymic,
            "phone": finishPhoneNumber,
            "email": changedEmail,
        }))
        onClickCloseModal()
    }


    return (
        <div className={active ? `${styles.modalActive} ${styles.modal}` : `${styles.modal}`}
             onClick={onClickCloseModal}>
            <div className={active
                ? `${styles.modalContent} ${styles.modalContentActive}`
                : `${styles.modalContent}`}
                 onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalPageTitle}>Редактирование контактных данных</div>
                <div className={style.companyInformation}>

                    <ContactModalRow value={changedLastname}
                                     name={"Фамилия:"}
                                     // callBack={setChangedLastnameHandler}/>
                                     callBack={setChangedLastnameHandler}/>
                    <ContactModalRow value={changedFirstname}
                                     name={"Имя:"}
                                     callBack={setChangedFirstnameHandler}/>
                    <ContactModalRow value={changedPatronymic}
                                     name={"Отчество:"}
                                     callBack={setChangedPatronymicHandler}/>


                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Телефон:</div>
                        <span style={{display: "flex"}}>
                            +7
                            <MaskedInput
                                className={styles.fullNameInput}
                                style={{width: "100px", marginLeft: "5px"}}
                                value={changedPhoneNumber}
                                onChange={(event) => setChangedPhoneNumber(event.currentTarget.value)}
                                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            />
                        </span>
                    </div>
                    <ContactModalRow value={changedEmail}
                                     name={"Эл. почта:"}
                                     callBack={setChangedEmailHandler}/>
                </div>
                <div className={styles.modalButtonGroup}>
                    <button className={styles.loginSaveButton} onClick={onContactsEditTCHandler}>СОХРАНИТЬ</button>
                    <button className={styles.loginCancelButton} onClick={onClickCloseModal}>ОТМЕНА</button>
                </div>
            </div>

        </div>
    );
});


export default ContactDataModal;