import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from "./EditBurialBlockModal.module.scss"
import style from "../BurialBlock.module.scss";

import {companyInfoEditTC} from "redux/reducers/companies-reducer";

import {AppRootReducerType} from "redux/store";
import {EditNamePacksModalPropsType} from "types/mainPageTypes";
import {getSelectCompaniesState, selectors} from "selectors/selectors";
import {CompaniesStateType} from "types/reducers-types/companiesReducerTypes";
import {
    useBusinessEntityInputHook,
    useCompaniesTypeInputHook,
    useDataInputHook,
    useNameValueInputHook,
    useNumberInputHook
} from "hooks/useInputHook/useBurialBlockInputHook";

const EditBurialBlockModal = memo(({
                                       active,
                                       setActive,
                                   }: EditNamePacksModalPropsType) => {
    const dispatch: any = useDispatch()

    const fullName = useSelector<AppRootReducerType, string>(selectors.getSelectFullName)
    //это имя нигде не отображается, но отправлять почему то надо:
    const shortName = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.shortName)
    const contractNumber = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.no)
    const contractData = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.issue_date)
    const {businessEntity} = useSelector<AppRootReducerType, CompaniesStateType>(getSelectCompaniesState)
    const type = useSelector<AppRootReducerType, string[]>((state: AppRootReducerType) => state.companies.type)

    const finishData = contractData.slice(0, 10)
    const companiesTypeInfo = type.map((status) => status === 'agent' ? 'Агент' : 'Подрядчик').toString()

    const {changedDataValue, handleSetChangedDataValueChange} = useDataInputHook(finishData)
    const {changedNumberValue, handleSetChangedNumberValueChange} = useNumberInputHook(contractNumber)
    const {changedBusinessEntityValue, handleSetChangedBusinessEntityValueChange} = useBusinessEntityInputHook(businessEntity)
    const {changedCompaniesTypeInfoValue, handleSetChangedCompaniesTypeInfoValueChange} = useCompaniesTypeInputHook(companiesTypeInfo)
    const {changedNameValue, handleSetChangedNameValueChange} = useNameValueInputHook(fullName)

    const onCloseModalClick = () => setActive(false)
    const onCompanyEditClick = () => {
        const data = new Date(changedDataValue).toISOString()
        console.log(data)
        dispatch(companyInfoEditTC({
            "name": changedNameValue,
            "shortName": shortName,
            "businessEntity": changedBusinessEntityValue,

            //не понятно какие формат этих данных ждет сервер, поэтому не отправляем их
            // "contract": {
            //     no: changedNumberValue,
            //     issue_date: "2015-03-12T00:00:00Z",
            // },

            //используемы старые значения, т.к. не понятно какие данные принимает сервер:
            type: ["agent", "contractor"]
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

                <div className={styles.modalPageTitle}>Редактирование информации об организации</div>

                <div className={style.companyInformation}>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Полное название:</div>
                        <input
                            className={styles.fullNameInput}
                            value={changedNameValue}
                            onChange={handleSetChangedNameValueChange}
                        />
                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Договор:</div>

                        <div className={style.lineValue}>
                            <input
                                style={{marginRight: "5px"}}
                                value={changedNumberValue}
                                className={styles.input}
                                onChange={handleSetChangedNumberValueChange}
                            />
                            от
                        </div>
                        <input
                            type={"date"}
                            value={changedDataValue}
                            className={style.inputDate}
                            onChange={handleSetChangedDataValueChange}
                        />
                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Форма:</div>
                        <input
                            className={styles.input}
                            value={changedBusinessEntityValue}
                            onChange={handleSetChangedBusinessEntityValueChange}
                        />
                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Тип:</div>

                        <input
                            className={styles.input}
                            value={changedCompaniesTypeInfoValue}
                            onChange={handleSetChangedCompaniesTypeInfoValueChange}
                        />
                    </div>
                    <div className={styles.infoMessage}>
                        <div>
                            По факту сервер принимает только новые
                        </div>
                        <div>
                            "Полное название" и "Форма" (их тогда только и меняем)
                        </div>
                        <br/>
                    </div>
                </div>
                <div className={styles.modalButtonGroup}>
                    <button className={styles.loginSaveButton} onClick={onCompanyEditClick}>СОХРАНИТЬ</button>
                    <button className={styles.loginCancelButton} onClick={onCloseModalClick}>ОТМЕНА</button>
                </div>


            </div>

        </div>
    );
});

export default EditBurialBlockModal;
