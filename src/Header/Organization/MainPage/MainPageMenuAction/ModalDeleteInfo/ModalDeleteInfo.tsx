import React, {useState} from 'react';
import styles from "../../../MainPage/InfoBlock/BurialBlock/EditBurialBlockModal/EditBurialBlockModal.module.scss"
import {useDispatch, useSelector} from "react-redux";
import style from "./ModalDeleteInfo.module.scss";
import {AppRootReducerType} from "../../../../../redux/store";
import {deleteCompanyCardTC} from "../../../../../redux/companies-reducer";

type ModalDeleteInfoPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}


const ModalDeleteInfo = React.memo(({
                                        active,
                                        setActive,
                                    }: ModalDeleteInfoPropsType) => {
    const dispatch: any = useDispatch()

    const fullName = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.name)
    const id = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.id)

    const onClickCloseModal = () => setActive(false)

    const deleteCompanyCard = () => {
        dispatch(deleteCompanyCardTC(id))
        onClickCloseModal()
    }
    return (
        <div className={active ? `${style.modalActive} ${style.modal}` : `${style.modal}`}
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

                    >УДАЛИТЬ </button>
                    <button className={styles.loginCancelButton} onClick={onClickCloseModal}>ОТМЕНА</button>
                </div>


            </div>

        </div>
    );
});

export default ModalDeleteInfo;


// type ModalDeleteInfoPropsPage = {}
//
// const ModalDeleteInfo = ({}: ModalDeleteInfoPropsPage) => {
//
//
//     const fullName = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.name)
//
//     return (
//         <div className={style.loginPage}>
//             <div className={style.descriptionBlock}>
//                 <span className={style.loginPageTitle}>
//                 Удалить карточку
//                 </span>
//
//                 <span className={style.loginPageDescription}>
//                 Отправить карточку организации {fullName} в архив?
//                 </span>
//             </div>
//
//             <div className={style.enterNameBlock}>
//                 <div className={style.buttonGroup}>
//                     <button className={style.loginCancelButton}>ОТМЕНА</button>
//                     <button
//                         className={style.loginSaveButton}
//                         // onClick={}
//
//                     >УДАЛИТЬ</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ModalDeleteInfo;