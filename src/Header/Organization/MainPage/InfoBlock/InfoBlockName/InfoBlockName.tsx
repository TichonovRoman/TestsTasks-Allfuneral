import React, {useState} from 'react';
import style from './InfoBlockName.module.scss';
import inputStyle from '../../../../../LoginPage/Input/CustomInput.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../../../../redux/store";
import editIcon from "../../../../../icons/EditIcon.svg"
import DefaultInput from "../../../../../LoginPage/Input/DefaultInput/DefaultInput";
import {EditNameInfoBlockAC} from "../../../../../redux/companies-reducer";

const InfoBlockName = () => {

    const dispatch: any = useDispatch()

    //отдельно вынести селекторы

    const infoBlockName = useSelector((state: AppRootReducerType) => state.companies.infoBlockName)

    const [valueInput, setValueInput] = useState<string>(infoBlockName)


    const [isEditMode, setIsEditMode] = useState(false)
    const onEditMode = () => {
        setValueInput(infoBlockName)
        setIsEditMode(true)
    }
    const offEditMode = () => {
        setValueInput(infoBlockName)
        setIsEditMode(false)
    }

    const onEditNameInfoBlockHandler = () => {
        dispatch(EditNameInfoBlockAC(valueInput))
        setValueInput(infoBlockName)
        offEditMode()
    }

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
                                                  inputValueChangeHandler={(event)=> setValueInput(event.currentTarget.value)}/>
                                </div>
                            </form>
                            : <DefaultInput title={"Наименование"}
                                            nameValue={valueInput}
                                            inputValueChangeHandler={(event)=> setValueInput(event.currentTarget.value)}/>

                        }


                        <button
                            className={style.loginCancelButton}
                            onClick={offEditMode}

                        >ОТМЕНА</button>
                        <button
                            className={style.loginSaveButton}
                            onClick={onEditNameInfoBlockHandler}

                        >СОХРАНИТЬ</button>



                    </div>

                    : <div>
                        {infoBlockName}
                        <button
                            title={"Редактировать название"}
                            className={style.infoBlockNameRedactionButton}
                            onClick={onEditMode}
                        >
                            <img src={editIcon}/>
                        </button>
                    </div>
            }
        </div>

    );
}

export default InfoBlockName;
