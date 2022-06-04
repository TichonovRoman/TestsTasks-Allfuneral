import React from 'react';
import style from "./LoginPage.module.scss"
import CustomInput from "./Input/CustomInput";

type LoginPagePropsPage = {}

const LoginPage = ({}: LoginPagePropsPage) => {

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
                <CustomInput/>
                <div className={style.buttonGroup}>
                    <button className={style.loginCancelButton}>ОТМЕНА</button>
                    <button className={style.loginSaveButton}>СОХРАНИТЬ</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;