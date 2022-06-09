import React, {memo} from 'react';
import style from "./BurialBlockRow.module.scss";

import {BurialBlockRowPropsType} from "../../../../../../../types/mainPageTypes";

const BurialBlockRow = memo(({rowName, value}: BurialBlockRowPropsType) => {
    return (
        <div className={style.lineInfoWrapper}>
            <div className={style.lineName}>{rowName}</div>
            <span className={style.lineValue}>{value}</span>
        </div>
    );
});

export default BurialBlockRow;
