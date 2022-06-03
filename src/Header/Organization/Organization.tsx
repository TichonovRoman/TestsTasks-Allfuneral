import React from 'react';
import style from './Organization.module.scss';
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";

const Organization = () => {
    return (
        <div className={style.header}>
            <SecondaryMenu/>
            <div className={style.mainPage}></div>
        </div>
    );
}

export default Organization;
