import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import styles from "../../../MainPage/InfoBlock/BurialBlock/EditBurialBlockModal/EditBurialBlockModal.module.scss"
import style from "./ModalDeleteInfo.module.scss";

import {AppRootReducerType} from "../../../../../redux/store";
import {deleteCompanyCardTC} from "../../../../../redux/companies-reducer";
import {ModalDeleteInfoPropsType} from "../../../../../types/mainPageTypes";
import {selectors} from "../../../../../selectors/selectors";

const ModalDeleteInfo = React.memo(({
                                        active,
                                        setActive,
                                    }: ModalDeleteInfoPropsType) => {
    const dispatch: any = useDispatch()

    const fullName = useSelector<AppRootReducerType, string>(selectors.selectFullName);
    const id = useSelector<AppRootReducerType, string>(selectors.selectId);

    const onClickCloseModal = () => setActive(false);

    const deleteCompanyCard = () => {
        dispatch(deleteCompanyCardTC(id))
        onClickCloseModal()
    };

    const finishClassName = active ? `${style.modalActive} ${style.modal}` : `${style.modal}`

    return (
        <div className={finishClassName}
             onClick={onClickCloseModal}>
            <div className={active
                ? `${style.modalContent} ${style.modalContentActive}`
                : `${style.modalContent}`}
                 onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalPageTitle}>Удалить карточку</div>
                <span className={style.loginPageDescription}>
             Отправить карточку организации {fullName} в архив?
          </span>
                <div className={styles.modalButtonGroup}>
                    <button
                        className={styles.loginSaveButton}
                        onClick={deleteCompanyCard}
                    >УДАЛИТЬ
                    </button>
                    <button className={styles.loginCancelButton} onClick={onClickCloseModal}>ОТМЕНА</button>
                </div>
            </div>
        </div>
    );
});

export default ModalDeleteInfo;