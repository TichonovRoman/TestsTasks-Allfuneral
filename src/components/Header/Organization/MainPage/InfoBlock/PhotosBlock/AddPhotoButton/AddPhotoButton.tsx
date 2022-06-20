import React, {ChangeEvent, memo, useState} from 'react';

import style from "./AddPhotoButton.module.scss";

import add from "common/icons/Add.svg";

import {savePhotoTC} from "redux/reducers/companies-reducer";

import {useDispatch} from "react-redux";

const firstPhotoNumberInArray = 0

const AddPhotoButton = memo(() => {

    const dispatch: any = useDispatch();

    const [inputValue, setInputValue] = useState<any>(undefined);

    const onPhotoSelectedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e)
        if (e.target.files) {
            dispatch(savePhotoTC(e.target.files[firstPhotoNumberInArray]))
            //зачищаем путь инпута, чтобы можно было выбрать тот же файл повторно:
            setInputValue("")
        }
    };

    return <>
        <label className={style.goBackButton} htmlFor="input__file">
            <img style={{marginLeft: "14px"}} src={add} alt={"Добавить изображение"}/>
            <span className={style.goBackButtonName}>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
        </label>
        <input value={inputValue} onChange={onPhotoSelectedChange} type="file" accept="image/*"
               id={"input__file"}
               style={{visibility: "hidden"}}/>
    </>
});

export default AddPhotoButton;
