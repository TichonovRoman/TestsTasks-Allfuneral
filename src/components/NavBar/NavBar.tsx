import React, {memo} from 'react';

import style from './NavBar.module.scss';

import marketIcon from "../../common/icons/Market.svg"
import homeIcon from "../../common/icons/Home.svg"
import searchIcon from "../../common/icons/Search.svg"
import settingsIcon from "../../common/icons/Settings.svg"
import chatIcon from "../../common/icons/Chat.svg"
import exitIcon from "../../common/icons/Exit.svg"

import {appPagesDataType} from "../../types/navbarTypes";

import {pageButtonCreate} from "../../utils/navbarUtils";

//данные кнопок в боковом меню:
const appPagesData: appPagesDataType = {
    upPageButton: [
        {image: homeIcon, linkAddress: "/home"},
        {image: marketIcon, linkAddress: "/organization"},
        {image: searchIcon, linkAddress: "/search"},
    ],
    downPageButton: [
        {image: settingsIcon, linkAddress: "/settings"},
        {image: chatIcon, linkAddress: "/chat"},
        {image: exitIcon, linkAddress: "/exit"},
    ]
}

const NavBar = memo (() => (
        <div className={style.navBar}>
            <div>
                {pageButtonCreate(appPagesData.upPageButton)}
            </div>
            <div>
                {pageButtonCreate(appPagesData.downPageButton)}
            </div>
        </div>
    ));


export default NavBar;
