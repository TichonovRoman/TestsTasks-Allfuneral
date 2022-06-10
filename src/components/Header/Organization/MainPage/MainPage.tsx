import React, {memo} from 'react';

import style from './MainPage.module.scss';

import MainPageMenuAction from "./MainPageMenuAction/MainPageMenuAction";
import InfoBlock from "./InfoBlock/InfoBlock";
import Preloader from "common/Preloader/Preloader";

import {useSelector} from "react-redux";

import {AppRootReducerType} from "redux/store";
import {CompaniesStateType} from "types/reducers-types/companiesReducerTypes";

import {selectors} from "selectors/selectors";


const MainPage = memo(() => {

    const {isEnablePreloader} = useSelector<AppRootReducerType, CompaniesStateType>(selectors.getSelectCompaniesState);

    return (
            <div className={style.mainPage}>
                {isEnablePreloader && <Preloader/>}
                <MainPageMenuAction/>
                <InfoBlock/>
            </div>
    );
})

export default MainPage;
