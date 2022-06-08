import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import style from './BurialBlock.module.scss'

import editIcon from "../../../../../icons/EditIcon.svg";

import {AppRootReducerType} from "../../../../../redux/store";
import {CompaniesStateType} from "../../../../../types/reducers-types/companiesReducerTypes";

import {SetCompaniesTC} from "../../../../../redux/companies-reducer";

import {selectors} from "../../../../../selectors/selectors";
import {isolationValues} from "../../../../../utils/navbarUtils";

import BurialBlockRow from "./BurialBlockRow/BurialBlockRow";
import EditBurialBlockModal from "./EditBurialBlockModal/EditBurialBlockModal";



const BurialBlock = () => {

    const dispatch: any = useDispatch()

    useEffect(() => {
            dispatch(SetCompaniesTC())
        }, [dispatch]
    );

    const [isEditMode, setIsEditMode] = useState(false);

    const memoizedSetIsEditMode = useCallback(setIsEditMode, []);

    const onEditMode = () => setIsEditMode(true);

    const fullName = useSelector<AppRootReducerType, string>(selectors.selectFullName);

    const contractNumber = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.no);
    const contractData = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.issue_date);
    const {businessEntity} = useSelector<AppRootReducerType, CompaniesStateType>(selectors.selectCompaniesState);
    const {type} = useSelector<AppRootReducerType, CompaniesStateType>(selectors.selectCompaniesState);

    const companiesTypeInfo = type.map((status) => status === 'agent' ? 'Агент' : ' Подрядчик').toString()

    const finishData = contractData.slice(0, 10);
    const year = isolationValues.year(finishData);
    const month = isolationValues.month(finishData);
    const day = isolationValues.day(finishData);

    return (
        <div className={style.burialBlock}>
            {isEditMode && <EditBurialBlockModal active={isEditMode} setActive={memoizedSetIsEditMode}/>}

            <div className={style.burialBlockNameBlock}>
                <div className={style.burialBlockName}>ОБЩАЯ ИНФОРМАЦИЯ</div>
                <button
                    title={"Редактировать карточку организации"}
                    className={style.infoBlockNameRedactionButton}
                    onClick={onEditMode}>
                    <img src={editIcon}/>
                </button>
            </div>
            <div className={style.companyInformation}>
                <BurialBlockRow rowName={"Полное название:"} value={fullName}/>
                <div className={style.lineInfoWrapper}>
                    <div className={style.lineName}>Договор:</div>
                    <div className={style.lineValue}>{contractNumber} от {day}.{month}.{year}</div>
                </div>
                <BurialBlockRow rowName={"Форма:"} value={businessEntity}/>
                <BurialBlockRow rowName={"Тип:"} value={companiesTypeInfo}/>
            </div>
        </div>
    );
};

export default BurialBlock;