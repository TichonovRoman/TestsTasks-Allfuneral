import React, {memo} from 'react';

import {useDispatch, useSelector} from "react-redux";

import styles from "../../InfoBlock/BurialBlock/EditBurialBlockModal/EditBurialBlockModal.module.scss"
import style from "./ModalDeleteInfo.module.scss";

import {AppRootReducerType} from "../../../../../../redux/store";
import {deleteCompanyCardTC} from "../../../../../../redux/companies-reducer";
import {ModalDeleteInfoPropsType} from "../../../../../../types/mainPageTypes";
import {selectors} from "../../../../../../selectors/selectors";

const ModalDeleteInfo = memo(({
                                        active,
                                        setActive,
                                    }: ModalDeleteInfoPropsType) => {
    const dispatch: any = useDispatch()

    const fullName = useSelector<AppRootReducerType, string>(selectors.getSelectFullName);
    const id = useSelector<AppRootReducerType, string>(selectors.getSelectId);

    const finishClassName = active ? `${style.modalActive} ${style.modal}` : `${style.modal}`

    const onCloseModalClick = () => setActive(false);
    const deleteCompanyCardClick = () => {
        dispatch(deleteCompanyCardTC(id))
        onCloseModalClick()
    };

    return (
        <div className={finishClassName}
             onClick={onCloseModalClick}>
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
                        onClick={deleteCompanyCardClick}
                    >УДАЛИТЬ
                    </button>
                    <button className={styles.loginCancelButton} onClick={onCloseModalClick}>ОТМЕНА</button>
                </div>
            </div>
        </div>
    );
});

export default ModalDeleteInfo;
