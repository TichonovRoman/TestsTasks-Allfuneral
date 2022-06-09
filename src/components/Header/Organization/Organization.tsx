import React, {memo} from 'react';

import style from './Organization.module.scss';

import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import MainPage from "./MainPage/MainPage";

const Organization = memo(() => (
        <div className={style.header}>
            <SecondaryMenu/>
            <MainPage/>
         </div>
    ));

export default Organization;
