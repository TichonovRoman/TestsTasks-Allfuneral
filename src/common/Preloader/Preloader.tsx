import React, {memo} from 'react';

import CircularProgress from "@mui/material/CircularProgress";

import style from "./Preloader.module.scss"

const Preloader = memo(() => (
        <CircularProgress color="success" className={style.preloader}/>
    ));

export default Preloader;
