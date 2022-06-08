import React from 'react';

import style from "./OtherPage.module.scss"

import {OtherPagePropsPage} from "../../types/otherPageType";

const OtherPage = ({title}: OtherPagePropsPage) => {

    const finalClass = title === "Page Not Found" ? style.redPage : style.page;

    return (
        <div className={finalClass}>
            {title}
        </div>
    );
};

export default OtherPage;