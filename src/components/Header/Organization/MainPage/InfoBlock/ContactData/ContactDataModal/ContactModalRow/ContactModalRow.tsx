import React, {memo} from 'react';

import styles from "./ContactModalRow.module.scss";
import style from "../../ContactData.module.scss";

import {ContactModalRowPropsType} from "types/mainPageTypes";

const ContactModalRow = memo(({name, value, callBack} :ContactModalRowPropsType) => {
    return (
        <div  className={style.lineInfoWrapper}>
            <div className={style.lineName}>{name}</div>
            <input
                className={styles.fullNameInput}
                value={value}
                onChange={callBack}
            />
        </div>
    );
});

export default ContactModalRow;
