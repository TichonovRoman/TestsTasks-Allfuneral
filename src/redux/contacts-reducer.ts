import {Dispatch} from "redux";
import {ChangeStatusPreloaderAC} from "./companies-reducer";

import {newContactsDataType} from "types/apiTypes";
import {ContactsStateType, newContactResponseType} from "types/reducers-types/contactsReducerTypes";
import {contactsAPI} from "../api/contacts-api";
import {CONTACTS_ID} from "../constants";

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
}

export const contactsReducer = (state: ContactsStateType = initialState, action: ActionsType): ContactsStateType => {
    switch (action.type) {
        case "SET-CONTACTS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const SetContactsAC = (contactsData: newContactResponseType) => {
    return {
        type: "SET-CONTACTS",
        payload: {
            ...contactsData
        }
    } as const
}

export type SetContactsACType = ReturnType<typeof SetContactsAC>

export const GetContactsTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        let response = await contactsAPI.getContacts(CONTACTS_ID);
        dispatch(SetContactsAC(response.data))
    } catch {
        console.error("Не удалость загрузить контакты")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}

export const SetContactsTC = (newContacts: newContactsDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        let response = await contactsAPI.patchContacts(newContacts);
        dispatch(SetContactsAC(response.data))
    } catch {
        console.error("Не удалость отправить и изменить контакты")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}
