import {ChangeEvent} from "react";

export type MainPageButtonsPropsType = {
    title: string,
    src:any,
    alt: string,
    onClick?: () => void
}

export type ModalDeleteInfoPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}

export type OnePhotoBlockPropsType = {
    name: string,
    thumbpath: string,
}

export type ContactDataModalModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}

export type ContactModalRowPropsType = {
    name: string,
    value: string,
    callBack: (event: ChangeEvent<HTMLInputElement>)=> void
}

export type BurialBlockRowPropsType = {
    rowName: string,
    value: string
}
export type InputPropsType = {
    nameValue: string,
    setNameValue: (value: string)=> void
}
export type DefaultInputPropsType = {
    title: string,
    nameValue: string,
    inputValueChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export type EditNamePacksModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
}


