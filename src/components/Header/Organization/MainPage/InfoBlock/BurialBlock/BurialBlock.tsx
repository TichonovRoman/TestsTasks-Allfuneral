import React, {memo, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import style from './BurialBlock.module.scss'

import editIcon from "common/icons/EditIcon.svg";

import {AppRootReducerType} from "redux/store";
import {CompaniesStateType} from "types/reducers-types/companiesReducerTypes";

import {setCompaniesTC} from "redux/reducers/companies-reducer";

import {getSelectCompaniesState, selectors} from "selectors/selectors";
import {isolationValues} from "utils/navbarUtils";

import BurialBlockRow from "./BurialBlockRow/BurialBlockRow";
import EditBurialBlockModal from "./EditBurialBlockModal/EditBurialBlockModal";

const BurialBlock = memo(() => {

    const dispatch: any = useDispatch()

    const contractNumber = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.no);
    const contractData = useSelector<AppRootReducerType, string>((state: AppRootReducerType) => state.companies.contract.issue_date);
    const {businessEntity} = useSelector<AppRootReducerType, CompaniesStateType>(getSelectCompaniesState);
    const {type} = useSelector<AppRootReducerType, CompaniesStateType>(getSelectCompaniesState);
    const fullName = useSelector<AppRootReducerType, string>(selectors.getSelectFullName);

    const [isEditMode, setIsEditMode] = useState(false);

    const finishData = contractData.slice(0, 10);
    const year = isolationValues.year(finishData);
    const month = isolationValues.month(finishData);
    const day = isolationValues.day(finishData);
    const companiesTypeInfo = type.map((status) => status === 'agent' ? 'Агент' : ' Подрядчик').toString()

    useEffect(() => {
            dispatch(setCompaniesTC())
        }, [dispatch]
    );

    const memoizedSetIsEditMode = useCallback(setIsEditMode, [setIsEditMode]);
    const onEditModeClick = () => setIsEditMode(true);

    return (
        <div className={style.burialBlock}>
            {isEditMode && <EditBurialBlockModal active={isEditMode} setActive={memoizedSetIsEditMode}/>}

            <div className={style.burialBlockNameBlock}>
                <div className={style.burialBlockName}>ОБЩАЯ ИНФОРМАЦИЯ</div>
                <button
                    title={"Редактировать карточку организации"}
                    className={style.infoBlockNameRedactionButton}
                    onClick={onEditModeClick}>
                    <img src={editIcon} alt={"Редактировать карточку организации"}/>
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
});

export default BurialBlock;
