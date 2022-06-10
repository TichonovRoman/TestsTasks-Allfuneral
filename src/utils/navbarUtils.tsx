import React from "react";

import {PagesListType} from "types/navbarTypes";

import IconButton from "components/NavBar/IconButton/IconButton";

export const pageButtonCreate = (pageLists: PagesListType[]) => (
    pageLists.map(({image, linkAddress}) => {
        const {v4: uuidv4} = require('uuid');
        return <IconButton key={uuidv4()} image={image} linkAddress={linkAddress}/>
    }))

export const isolationValues = {
    year(Data: string) {
        return Data.substring(0, 4)
    },
    month(Data: string) {
        return Data.substring(5, 7)
    },
    day(Data: string) {
        return Data.substring(8, 10)
    },
}
