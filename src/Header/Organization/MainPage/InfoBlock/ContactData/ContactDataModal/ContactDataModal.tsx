import React, {useState} from 'react';
import styles from "./ContactDataModal.module.scss"
import {useDispatch, useSelector} from "react-redux";
import style from "../ContactData.module.scss";
import {AppRootReducerType} from "../../../../../../redux/store";
import MaskedInput from 'react-text-mask'
import {ContactsStateType, SetContactsTC} from "../../../../../../redux/contacts-reducer";
import {selectContactsState} from "../../../../../../selectors/selectors";

type ContactDataModalModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}

const ContactDataModal = React.memo(({
                                         active,
                                         setActive,
                                     }: ContactDataModalModalPropsType) => {
    const dispatch: any = useDispatch()

    const {lastname} = useSelector<AppRootReducerType, ContactsStateType>(selectContactsState)
    const {firstname} = useSelector<AppRootReducerType, ContactsStateType>(selectContactsState)
    const {patronymic} = useSelector<AppRootReducerType, ContactsStateType>(selectContactsState)
    const {phone} = useSelector<AppRootReducerType, ContactsStateType>(selectContactsState)
    const {email} = useSelector<AppRootReducerType, ContactsStateType>(selectContactsState)


    const [changedLastname, setChangedLastname] = useState<string>(lastname)
    const [changedFirstname, setChangedFirstname] = useState<string>(firstname)
    const [changedPatronymic, setChangedPatronymic] = useState<string>(patronymic)
    const [changedPhoneNumber, setChangedPhoneNumber] = useState<string>(phone.substring(1, 11))
    const [changedEmail, setChangedEmail] = useState<string>(email)

    const onClickCloseModal = () => setActive(false)

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
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Фамилия:</div>

                        <input
                            className={styles.fullNameInput}
                            value={changedLastname}
                            onChange={(event) => setChangedLastname(event.currentTarget.value)}
                        />

                    </div>

                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Имя:</div>

                        <input
                            className={styles.fullNameInput}
                            value={changedFirstname}
                            onChange={(event) => setChangedFirstname(event.currentTarget.value)}
                        />

                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Отчество:</div>

                        <input
                            className={styles.fullNameInput}
                            value={changedPatronymic}
                            onChange={(event) => setChangedPatronymic(event.currentTarget.value)}
                        />

                    </div>

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
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Эл. почта:</div>




                        <input
                            className={styles.fullNameInput}
                            value={changedEmail}
                            onChange={(event) => setChangedEmail(event.currentTarget.value)}
                        />







                    </div>
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