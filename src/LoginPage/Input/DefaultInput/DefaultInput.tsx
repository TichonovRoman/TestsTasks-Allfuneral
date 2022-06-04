import React, {ChangeEvent} from 'react';
import style from "./DefaultInput.module.scss"


type DefaultInputPropsType = {
    title: string,
    nameValue: string,
    inputValueChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const DefaultInput = React.memo( ({title, nameValue, inputValueChangeHandler}: DefaultInputPropsType) => {
    return <input
        type={"text"}
        placeholder={title}
        className={style.loginInput}
        value={nameValue}
        autoFocus
        onChange={inputValueChangeHandler}
    />
})

export default DefaultInput;