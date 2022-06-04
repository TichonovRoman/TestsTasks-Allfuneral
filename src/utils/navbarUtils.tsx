import IconButton from "../NavBar/IconButton/IconButton";
import React from "react";
// import {PagesListType} from "../types/navbarTypes";
import {PagesListType} from "../types/navbarTypes";


export const pageButtonCreate = (pageLists: PagesListType[]) => {
    return pageLists.map((pageButton: PagesListType) => {
        return <IconButton image={pageButton.image} linkAddress={pageButton.linkAddress}/>
    })
}