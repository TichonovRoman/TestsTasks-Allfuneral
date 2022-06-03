import React from 'react';
import style from './NavBar.module.scss';
import marketIcon from "../icons/Market.svg"
import homeIcon from "../icons/Home.svg"
import searchIcon from "../icons/Search.svg"
import IconButton from "./IconButton/IconButton";
import settingsIcon from "../icons/Settings.svg"
import chatIcon from "../icons/Chat.svg"
import exitIcon from "../icons/Exit.svg"

const NavBar = () => {
    return (
        <div className={style.navBar}>
            <div>
                <IconButton image={homeIcon} linkAddress={"/home"}/>
                <IconButton image={marketIcon} linkAddress={"/organization"}/>
                <IconButton image={searchIcon} linkAddress={"/search"}/>
            </div>

            <div>
                <IconButton image={settingsIcon} linkAddress={"/settings"}/>
                <IconButton image={chatIcon} linkAddress={"/chat"}/>
                <IconButton image={exitIcon} linkAddress={"/exit"}/>
            </div>

        </div>
    );
}

export default NavBar;
