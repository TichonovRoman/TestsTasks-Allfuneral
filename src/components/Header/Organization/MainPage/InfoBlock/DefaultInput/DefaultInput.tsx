import React, {memo} from 'react';
import style from "./DefaultInput.module.scss"
import {DefaultInputPropsType} from "../../../../../../types/mainPageTypes";

const DefaultInput = memo( ({title, nameValue, inputValueChange}: DefaultInputPropsType) => {
    return <input
        type={"text"}
        placeholder={title}
        className={style.loginInput}
        value={nameValue}
        autoFocus
        onChange={inputValueChange}
    />
})

export default DefaultInput;
