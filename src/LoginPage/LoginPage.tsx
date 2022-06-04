import React, {useCallback, useState} from 'react';
import style from "./LoginPage.module.scss"
import CustomInput from "./Input/CustomInput";
import {useDispatch} from "react-redux";
import {SetCompaniesTC} from "../redux/companies-reducer";

type LoginPagePropsPage = {}

const LoginPage = ({}: LoginPagePropsPage) => {

    const dispatch: any = useDispatch()


    const [nameValue, setNameValue] = useState<string>("")

    const memoizedSetNameValue = useCallback(setNameValue, [])

    const setToken = () => {
        dispatch(SetCompaniesTC())
    }

    return (
        <div className={style.loginPage}>
            <div className={style.descriptionBlock}>
                <span className={style.loginPageTitle}>
                Регистрация
                </span>

                <span className={style.loginPageDescription}>
                Для того, чтобы войти в систему, введите, пожалуйста, свое имя для регистрации:
                </span>
            </div>

            <div className={style.enterNameBlock}>
                <CustomInput nameValue={nameValue} setNameValue={memoizedSetNameValue}/>
                <div className={style.buttonGroup}>
                    <button className={style.loginCancelButton}>ОТМЕНА</button>
                    <button
                        className={style.loginSaveButton}
                        onClick={setToken}

                    >СОХРАНИТЬ</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;