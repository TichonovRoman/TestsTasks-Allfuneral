import React from 'react';

import style from './MainPage.module.scss';

import MainPageMenuAction from "./MainPageMenuAction/MainPageMenuAction";
import InfoBlock from "./InfoBlock/InfoBlock";
import Preloader from "../../../common/Preloader/Preloader";

import {useSelector} from "react-redux";

import {AppRootReducerType} from "redux/store";

const MainPage = () => {

    const isActivePreloader = useSelector<AppRootReducerType, boolean>((state: AppRootReducerType) => state.companies.isEnablePreloader);

    return (
            <div className={style.mainPage}>
                {isActivePreloader && <Preloader/>}
                <MainPageMenuAction/>
                <InfoBlock/>
            </div>
    );
}

export default MainPage;
