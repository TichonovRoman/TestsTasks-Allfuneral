import {Dispatch} from "redux";
import {authAPI} from "../api/testProject-api";
import {ChangeStatusPreloaderAC} from "./companies-reducer";

import {newContactsDataType} from "types/apiTypes";
import {ContactsStateType} from "types/reducers-types/contactsReducerTypes";

type ActionsType = SetContactsACType

const initialState: ContactsStateType = {
    id: "",
    lastname: "",
    firstname: "",
    patronymic: "",
    phone: "",
    email: "",
    createdAt: "",
    updatedAt: "",

    isEnablePreloader: false,
}

export const contactsReducer = (state: ContactsStateType = initialState, action: ActionsType): ContactsStateType => {
    switch (action.type) {
        case "SET-CONTACTS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const SetContactsAC = (contactsData: any) => {
    return {
        type: "SET-CONTACTS",
        payload: {
            ...contactsData
        }
    } as const
}

export type SetContactsACType = ReturnType<typeof SetContactsAC>

export const GetContactsTC = (id: string) => {

    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.getContacts(id)
            .then((response) => {
                dispatch(SetContactsAC(response.data))
            })
            .catch((err) => {
                // dispatch(errorMessageAC("some error"))
            })
            .finally(() => {
                dispatch(ChangeStatusPreloaderAC(false))
            })
    }
}

export const SetContactsTC = (newContacts: newContactsDataType) => {
    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.patchContacts(newContacts)
            .then((response) => {
                dispatch(SetContactsAC(response.data))
            })
            .catch((err) => {
                // dispatch(errorMessageAC("some error"))
            })
            .finally(() => {
                dispatch(ChangeStatusPreloaderAC(false))
            })
    }
}
