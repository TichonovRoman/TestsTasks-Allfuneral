import React from 'react';
import style from './MainPage.module.scss';
import MainPageMenuAction from "./MainPageMenuAction/MainPageMenuAction";
import InfoBlock from "./InfoBlock/InfoBlock";

const MainPage = () => {

    return (
            <div className={style.mainPage}>
                <MainPageMenuAction/>
                <InfoBlock/>
            </div>
    );
}

export default MainPage;
