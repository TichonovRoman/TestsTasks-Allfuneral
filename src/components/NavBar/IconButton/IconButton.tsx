import React, {memo, useState} from 'react';
import style from "./IconButton.module.scss";
import {NavLink} from "react-router-dom";

import {IconButtonPropsType} from "types/navbarTypes";

const IconButton = memo(({image, linkAddress}: IconButtonPropsType) => {

        const [isActive, setIsActive] = useState(false);

        const finalClass = isActive ? `${style.button} ${style.buttonActive}` : style.button;

        const handleIsActiveChange = (isActive: { isActive: boolean }) => {
            isActive.isActive ? setIsActive(true) : setIsActive(false)
            return `${style.bigButton}`
        };

        return (
            <div className={style.bigButtonActive}>
                <NavLink to={linkAddress}
                         className={(isActive) => handleIsActiveChange(isActive)}
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
    })
;

export default IconButton;
