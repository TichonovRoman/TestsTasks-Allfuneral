import {Dispatch} from "redux";
import {authAPI, newContactsDataType} from "../api/testProject-api";
import {ChangeStatusPreloaderAC} from "./companies-reducer";


export type ContactsStateType = {

    "id": string,
    "lastname":string,
    "firstname":string,
    "patronymic":string,
    "phone":string,
    "email":string,
    "createdAt":string,
    "updatedAt":string

    isEnablePreloader: boolean,
}

type ActionsType = SetContactsACType

const initialState: ContactsStateType = {

    id:"16",
    lastname:"Фамилия",
    firstname:"Имя",
    patronymic:"Отчество",
    phone:"79999999999",
    email:"1111@mail.ru",
    createdAt:"2020-11-21T08:03:26.589Z",
    updatedAt:"2020-11-23T09:30:00Z",

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
                //выключаем крутилку
                dispatch(ChangeStatusPreloaderAC(false))
            })
    }
}


export const SetContactsTC = (newContacts: newContactsDataType) => {
    debugger
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
                //выключаем крутилку
                dispatch(ChangeStatusPreloaderAC(false))
            })
    }
}
//
//
//
//
// export const companyInfoEditTC = (newInfo: newCompaniesInfoDataType) => {
//
//     return (dispatch: Dispatch) => {
//         dispatch(ChangeStatusPreloaderAC(true))
//         authAPI.patchCompaniesInfo(newInfo)
//             .then((response) => {
//                 dispatch(SetCompaniesAC(response.data))
//             })
//             .catch((err) => {
//                                // dispatch(errorMessageAC("some error"))
//             })
//             .finally(() => {
//                 //выключаем крутилку
//                 dispatch(ChangeStatusPreloaderAC(false))
//             })
//     }
// }
