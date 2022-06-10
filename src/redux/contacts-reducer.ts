import {Dispatch} from "redux";
import {changeStatusPreloaderAC} from "./companies-reducer";

import {newContactsDataType} from "types/apiTypes";
import {ContactsStateType, newContactResponseType} from "types/reducers-types/contactsReducerTypes";
import {contactsAPI} from "api/contacts-api";
import {CONTACTS_ID} from "constants/index";

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

export const setContactsAC = (contactsData: newContactResponseType) => {
    return {
        type: "SET-CONTACTS",
        payload: {
            ...contactsData
        }
    } as const
}

export type SetContactsACType = ReturnType<typeof setContactsAC>

export const getContactsTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        let response = await contactsAPI.getContacts(CONTACTS_ID);
        dispatch(setContactsAC(response.data))
    } catch {
        console.error("Не удалость загрузить контакты")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}

export const setContactsTC = (newContacts: newContactsDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        let response = await contactsAPI.patchContacts(newContacts);
        dispatch(setContactsAC(response.data))
    } catch {
        console.error("Не удалость отправить и изменить контакты")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}
