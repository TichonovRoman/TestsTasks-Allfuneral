import React from 'react';

import style from './Organization.module.scss';

import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import MainPage from "./MainPage/MainPage";

const Organization = () => (
        <div className={style.header}>
            <SecondaryMenu/>
            <MainPage/>
         </div>
    );

export default Organization;
