import React, {ChangeEvent, useCallback, useState} from 'react';

import style from './InfoBlockName.module.scss';
import inputStyle from './Input/CustomInput.module.scss';

import {useDispatch, useSelector} from "react-redux";
import editIcon from "../../../../../icons/EditIcon.svg"
import DefaultInput from "../DefaultInput/DefaultInput";
import {EditNameInfoBlockAC} from "../../../../../redux/companies-reducer";

import {selectors} from "../../../../../selectors/selectors";

const InfoBlockName = () => {

    const dispatch: any = useDispatch()

    const infoBlockName = useSelector(selectors.infoBlockName)

    const [valueInput, setValueInput] = useState<string>(infoBlockName);
    const [isEditMode, setIsEditMode] = useState(false);

    const onEditMode = () => {
        setValueInput(infoBlockName)
        setIsEditMode(true)
    };
    const offEditMode = () => {
        setValueInput(infoBlockName)
        setIsEditMode(false)
    };
    const onEditNameInfoBlockHandler = () => {
        dispatch(EditNameInfoBlockAC(valueInput))
        setValueInput(infoBlockName)
        offEditMode()
    };
    const inputValueChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {

        setValueInput(event.currentTarget.value)
    }, [])

    return (
        <div className={style.infoBlockName}>
            {
                isEditMode
                    ? <div className={style.editBlockName}>

                        {valueInput ? <form>
                                <div className={inputStyle.fieldset}>
                                    <label className={inputStyle.labelName}>Наименование</label>
                                    <DefaultInput title={"Наименование"}
                                                  nameValue={valueInput}
                                                  inputValueChange={inputValueChangeHandler}/>
                                </div>
                            </form>
                            : <DefaultInput title={"Наименование"}
                                            nameValue={valueInput}
                                            inputValueChange={inputValueChangeHandler}/>
                        }
                        <button
                            className={style.loginCancelButton}
                            onClick={offEditMode}

                        >ОТМЕНА
                        </button>
                        <button
                            className={style.loginSaveButton}
                            onClick={onEditNameInfoBlockHandler}
                        >СОХРАНИТЬ
                        </button>
                    </div>

                    : <div>
                        {infoBlockName}
                        <button
                            title={"Редактировать название"}
                            className={style.infoBlockNameRedactionButton}
                            onClick={onEditMode}
                        >
                            <img src={editIcon} alt={"editButton"}/>
                        </button>
                    </div>
            }
        </div>

    );
}

export default InfoBlockName;
