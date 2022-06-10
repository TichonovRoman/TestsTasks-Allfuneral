import React, {ChangeEvent, memo, useCallback, useState} from 'react';

import style from './InfoBlockName.module.scss';

import {useDispatch, useSelector} from "react-redux";
import editIcon from "common/icons/EditIcon.svg"
import DefaultInput from "../DefaultInput/DefaultInput";
import {editNameInfoBlockAC} from "redux/companies-reducer";
import {selectors} from "selectors/selectors";

const InfoBlockName = memo(() => {

    const dispatch: any = useDispatch()

    const infoBlockName = useSelector(selectors.getInfoBlockName)

    const [valueInput, setValueInput] = useState<string>(infoBlockName);
    const [isEditMode, setIsEditMode] = useState(false);

    const onEditModeClick = () => {
        setValueInput(infoBlockName)
        setIsEditMode(true)
    };
    const offEditModeClick = () => {
        setValueInput(infoBlockName)
        setIsEditMode(false)
    };
    const onEditNameInfoBlockClick = () => {
        dispatch(editNameInfoBlockAC(valueInput))
        setValueInput(infoBlockName)
        offEditModeClick()
    };
    const handleInputValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.currentTarget.value)
    }, [])

    return (
        <div className={style.infoBlockName}>
            {
                isEditMode
                    ? <div className={style.editBlockName}>
                        {valueInput ? <form>
                                <div className={style.fieldset}>
                                    <label className={style.labelName}>Наименование</label>
                                    <DefaultInput title={"Наименование"}
                                                  nameValue={valueInput}
                                                  inputValueChange={handleInputValueChange}/>
                                </div>
                            </form>
                            : <DefaultInput title={"Наименование"}
                                            nameValue={valueInput}
                                            inputValueChange={handleInputValueChange}/>
                        }
                        <button
                            className={style.loginCancelButton}
                            onClick={offEditModeClick}

                        >ОТМЕНА
                        </button>
                        <button
                            className={style.loginSaveButton}
                            onClick={onEditNameInfoBlockClick}
                        >СОХРАНИТЬ
                        </button>
                    </div>

                    : <div className={style.blockNameValue}>
                        {infoBlockName}
                        <button
                            title={"Редактировать название"}
                            className={style.infoBlockNameRedactionButton}
                            onClick={onEditModeClick}
                        >
                            <img src={editIcon} alt={"editButton"}/>
                        </button>
                    </div>
            }
        </div>

    );
})

export default InfoBlockName;
