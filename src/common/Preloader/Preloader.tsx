import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import style from "./Preloader.module.scss"

const Preloader = () => {
    return (
        <CircularProgress color="success" className={style.preloader}/>
    );
};

export default Preloader;