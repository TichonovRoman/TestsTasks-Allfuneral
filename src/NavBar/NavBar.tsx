import React from 'react';

import style from './NavBar.module.scss';

import marketIcon from "../icons/Market.svg"
import homeIcon from "../icons/Home.svg"
import searchIcon from "../icons/Search.svg"
import settingsIcon from "../icons/Settings.svg"
import chatIcon from "../icons/Chat.svg"
import exitIcon from "../icons/Exit.svg"

import {appPagesDataType} from "../types/navbarTypes";

import {pageButtonCreate} from "../utils/navbarUtils";

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

const NavBar = () => (
        <div className={style.navBar}>
            <div>
                {pageButtonCreate(appPagesData.upPageButton)}
            </div>
            <div>
                {pageButtonCreate(appPagesData.downPageButton)}
            </div>
        </div>
    );


export default NavBar;
