import React, {ChangeEvent, useCallback} from 'react';
import style from "./CustomInput.module.scss"
import DefaultInput from "./DefaultInput/DefaultInput";

type InputPropsType = {
    nameValue: string,
    setNameValue: (value: string)=> void
}

const CustomInput = React.memo( ({nameValue, setNameValue}: InputPropsType) => {

    const inputValueChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.currentTarget.value)
    }, [])

    return (
        <div>
            {
                nameValue
                    ? <form>
                        <div className={style.fieldset}>
                            <label className={style.labelName}>ИМЯ</label>
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
})


export default CustomInput;