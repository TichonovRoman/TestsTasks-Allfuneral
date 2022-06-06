import React, {useState} from 'react';
import styles from "./EditBurialBlockModal.module.scss"
import {useDispatch, useSelector} from "react-redux";
import style from "../BurialBlock.module.scss";
import {companyInfoEditTC} from "../../../../../../redux/companies-reducer";
import {AppRootReducerType} from "../../../../../../redux/store";

type EditNamePacksModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}


const EditBurialBlockModal = React.memo(({
                                             active,
                                             setActive,
                                         }: EditNamePacksModalPropsType) => {
    const dispatch: any = useDispatch()

    const fullName = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.name)

    //это имя нигде не отображается, то отправлять почему то надо:
    const shortName = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.shortName)

    const contractNumber = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.no)
    const contractData = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.issue_date)
    const businessEntity = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.businessEntity)
    const type = useSelector<AppRootReducerType, string[]>((state: AppRootReducerType) => state.companies.type)


    const finishData = contractData.slice(0, 10)
    // const year = finishData.substring(0, 4)
    // const month = finishData.substring(5, 7)
    // const day = finishData.substring(8, 10)

    const companiesTypeInfo = type.map((status) => status === 'agent' ? 'Агент' : 'Подрядчик').toString()

    const [changedDataValue, setChangedDataValue] = useState<any>(finishData)
    const [changedNumberValue, setChangedNumberValue] = useState(contractNumber)
    const [changedBusinessEntityValue, setChangedBusinessEntityValue] = useState(businessEntity)
    const [сhangedСompaniesTypeInfoValue, setChangedСompaniesTypeInfoValue] = useState(companiesTypeInfo)
    const [changedNameValue, setChangedNameValue] = useState(fullName)

// //получаем обратно массив для сэтания:
//     let sentIfoTypeArray = сhangedСompaniesTypeInfoValue.split(',');


    const onClickCloseModal = () => setActive(false)

    // const data = changedDataValue.toISOString()

    const onCompanyEditTCHandler = () => {
        const data = new Date(changedDataValue).toISOString()
        console.log(data)
        dispatch(companyInfoEditTC({
            "name": changedNameValue,
            "shortName": shortName,
            "businessEntity": changedBusinessEntityValue,

            //не понятно какие данные получает сервер, поэтому не отправляем их
            // "contract": {
            //     no: changedNumberValue,
            //     issue_date: "2015-03-12T00:00:00Z",
            // },

            //используемы старые значения, т.к. не понятно какие данные принимает сервер:
            type: ["agent", "contractor"]
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

                <div className={styles.modalPageTitle}>Редактирование информации об организации</div>


                <div className={style.companyInformation}>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Полное название:</div>
                        <input
                            className={styles.lineValue}
                            value={changedNameValue}
                            onChange={(event) => setChangedNameValue(event.currentTarget.value)}
                        />
                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Договор:</div>

                        <div className={style.lineValue}>
                            <input
                                style={{marginRight: "5px"}}
                                value={changedNumberValue}
                                onChange={(event) => setChangedNumberValue(event.currentTarget.value)}
                            />
                            от
                        </div>


                        <input
                            type={"date"}
                            value={changedDataValue}
                            className={style.inputDate}
                            onChange={(event) => setChangedDataValue(event.currentTarget.value)}

                        />


                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Форма:</div>
                        <input
                            className={style.lineValue}
                            value={changedBusinessEntityValue}
                            onChange={(event) => setChangedBusinessEntityValue(event.currentTarget.value)}


                        />
                    </div>
                    <div className={style.lineInfoWrapper}>
                        <div className={style.lineName}>Тип:</div>

                        <input
                            className={style.lineValue}
                            value={сhangedСompaniesTypeInfoValue}
                            onChange={(event) => setChangedСompaniesTypeInfoValue(event.currentTarget.value)}

                        />
                    </div>

                </div>


                <div className={styles.modalButtonGroup}>
                    <button className={styles.loginSaveButton} onClick={onCompanyEditTCHandler}>СОХРАНИТЬ</button>
                    <button className={styles.loginCancelButton} onClick={onClickCloseModal}>ОТМЕНА</button>
                </div>


            </div>

        </div>
    );
});

export default EditBurialBlockModal;