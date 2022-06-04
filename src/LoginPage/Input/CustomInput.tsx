import React, {ChangeEvent, useState} from 'react';
import style from "./CustomInput.module.scss"
import DefaultInput from "./DefaultInput/DefaultInput";

type InputPropsType = {}

const CustomInput = ({}: InputPropsType) => {

    const [nameValue, setNameValue] = useState("")

    const inputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.currentTarget.value)
    }

    return (
        <div>
            {
                nameValue
                    ? <form>
                        <div className={style.fieldset}>
                            <label className={style.labelName}>Имя</label>
                            <DefaultInput title={"Имя"}
                                          nameValue={nameValue}
                                          inputValueChangeHandler={inputValueChangeHandler}/>
                        </div>
                    </form>
                    : <DefaultInput title={"Имя"}
                                    nameValue={nameValue}
                                    inputValueChangeHandler={inputValueChangeHandler}/>
            }
        </div>

    );
};


export default CustomInput;