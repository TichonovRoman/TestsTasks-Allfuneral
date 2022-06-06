import React from 'react';
import style from './BurialBlock.module.scss'
import editIcon from "../../../../../icons/EditIcon.svg";
import {useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";

const BurialBlock = () => {

    const onEditMode = () => {
    }

    const fullName =  useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.name)
    const contractNumber =  useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.no)
    const contractData =  useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.issue_date)
    const businessEntity =  useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.businessEntity)
    const type =  useSelector<AppRootReducerType, string[]>((state: AppRootReducerType) => state.companies.type)

    const companiesTypeInfo = type.map((status)=> status ==='agent' ? 'Агент' : ' Подрядчик').toString()
    //     = type.map((status) => {
    //     return status
    //     // status[1]
    // })

    const finishData = contractData.slice(0,10)
    const year = finishData.substring(0,4)
    const month = finishData.substring(5,7)
    const day = finishData.substring(8,10)

    return (
        <div className={style.burialBlock}>
            <div className={style.burialBlockNameBlock}>
                <div className={style.burialBlockName}>ОБЩАЯ ИНФОРМАЦИЯ</div>

                <button className={style.infoBlockNameRedactionButton} onClick={onEditMode}>
                    <img src={editIcon}/>
                </button>
            </div>



            <div className={style.companyInformation}>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Полное название:</div>
                    <span className={style.lineValue}>{fullName}</span>
                </div>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Договор:</div>
                    <div className={style.lineValue}>{contractNumber} от {day}.{month}.{year}</div>
                </div>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Форма:</div>
                    <span className={style.lineValue}>{businessEntity}</span>
                </div>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Тип:</div>
                    <span className={style.lineValue}>{companiesTypeInfo}</span>
                </div>

            </div>


        </div>


    );
};

export default BurialBlock;