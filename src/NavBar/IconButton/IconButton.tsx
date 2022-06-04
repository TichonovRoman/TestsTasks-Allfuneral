import React, {useState} from 'react';
import style from "./IconButton.module.scss";
import {NavLink} from "react-router-dom";

type IconButtonPropsType = {
    image: string,
    linkAddress: string,
}


const IconButton = ({image, linkAddress}: IconButtonPropsType) => {

        const [isActive, setIsActive] = useState(false)

        const isActiveChangeHandler = (isActive: { isActive: boolean }) => {
            isActive.isActive ? setIsActive(true) : setIsActive(false)
            return `${style.bigButton}`
        }

        const finalClass = isActive ? `${style.button} ${style.buttonActive}` : style.button

        return (

            <div className={style.bigButtonActive}>
                <NavLink to={linkAddress}
                         className={(isActive) => isActiveChangeHandler(isActive)}
                >
                    <div className={finalClass}/>
                    <img
                        className={style.buttonsIcon}
                        src={image}
                        alt={"icons"}
                    />
                </NavLink>

            </div>

        );
    }
;

export default IconButton;