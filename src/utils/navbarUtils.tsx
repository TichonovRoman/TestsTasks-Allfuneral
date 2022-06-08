import IconButton from "../NavBar/IconButton/IconButton";
import React from "react";
// import {PagesListType} from "../types/navbarTypes";
import {PagesListType} from "../types/navbarTypes";


export const pageButtonCreate = (pageLists: PagesListType[]) => {
    return pageLists.map((pageButton: PagesListType) => {
        const {v4: uuidv4} = require('uuid');
        return <IconButton  key={uuidv4()} image={pageButton.image} linkAddress={pageButton.linkAddress}/>
    })
}