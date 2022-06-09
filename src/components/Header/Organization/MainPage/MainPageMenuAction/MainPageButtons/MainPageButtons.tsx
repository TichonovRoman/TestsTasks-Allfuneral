import React, {memo} from 'react';

import style from "./MainPageButtons.module.scss";

import {MainPageButtonsPropsType} from "../../../../../../types/mainPageTypes";

const MainPageButtons = memo( ({title, src, alt, onClick}: MainPageButtonsPropsType) => (
        <button
            title={title}
            className={style.mainButton}
            onClick={onClick}
        >
            <img
                className={style.mainButtonIcons}
                src={src}
                alt={alt}
            />
        </button>
    ));

export default MainPageButtons;
