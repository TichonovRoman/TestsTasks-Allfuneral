import {Dispatch} from "redux";

import {photosAPI} from "../api/photos-api";
import {companiesAPI} from "../api/companies-api";

import {newCompaniesInfoDataType} from "types/apiTypes";
import {
    CompaniesStateResponseType,
    CompaniesStateType,
    PhotoDataType
} from "types/reducers-types/companiesReducerTypes";


type ActionsType =
    SetCompaniesACType
    | ChangeStatusPreloaderACType
    | EditNameInfoBlockACType
    | SavePhotoSuccessACType
    | DeletePhotoACType

const initialState: CompaniesStateType = {
    id: "",
    contactId: "",
    name: "",
    shortName: "",
    businessEntity: "",
    contract: {
        no: "",
        issue_date: ""
    },
    type: [],
    status: "",
    createdAt: "",
    updatedAt: "",
    //с сервера приходит "photos" - надо сэтать вручную. Если оставить имя photos - то баги!!!
    photosData: [],
    infoBlockName: "Перспективные захоронения",
    isEnablePreloader: false,
}

export const companiesReducer = (state: CompaniesStateType = initialState, action: ActionsType): CompaniesStateType => {

    switch (action.type) {
        case "SET-COMPANIES":
            //пришлось ввести названия ключей photos (ответ сервера) и photosData(ключ стейта, с которым нет багов)
            return {...state, ...action.payload, photosData: [...action.payload.photos]}
        case "PHOTO_SUCCESS":
            return {...state, ...action.payload, photosData: [...state.photosData, action.payload.newPhotoData]}
        case "DELETE-PHOTO":
            return {
                ...state,
                photosData: state.photosData.filter(photoData => photoData.name !== action.payload.photoName)
            }
        case "EDIT-NAME-INFO-BLOCK":
        case "CHANGE-STATUS-PRELOADER":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const setCompaniesAC = (companiesInfo: CompaniesStateResponseType) => {
    return {
        type: "SET-COMPANIES",
        payload: {
            ...companiesInfo
        }
    } as const
}

export const editNameInfoBlockAC = (infoBlockName: string) => {
    return {
        type: "EDIT-NAME-INFO-BLOCK",
        payload: {
            infoBlockName
        }
    } as const
}

export const changeStatusPreloaderAC = (isEnablePreloader: boolean) => {
    return {
        type: "CHANGE-STATUS-PRELOADER",
        payload: {
            isEnablePreloader
        }
    } as const
}

export const savePhotoSuccessAC = (newPhotoData: PhotoDataType) => {
    return {
        type: "PHOTO_SUCCESS",
        payload: {
            newPhotoData
        }
    } as const
}

export const deletePhotoAC = (photoName: string) => {
    return {

        type: "DELETE-PHOTO",
        payload: {
            photoName
        }
    } as const
}

export type SetCompaniesACType = ReturnType<typeof setCompaniesAC>
export type ChangeStatusPreloaderACType = ReturnType<typeof changeStatusPreloaderAC>
export type EditNameInfoBlockACType = ReturnType<typeof editNameInfoBlockAC>
export type SavePhotoSuccessACType = ReturnType<typeof savePhotoSuccessAC>
export type DeletePhotoACType = ReturnType<typeof deletePhotoAC>

export const setCompaniesTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        let response = await companiesAPI.getCompaniesInfo();
        dispatch(setCompaniesAC(response.data))
    } catch {
        console.error("Не удалость загрузить информацию о компании")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}

export const companyInfoEditTC = (newInfo: newCompaniesInfoDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        let response = await companiesAPI.patchCompaniesInfo(newInfo);
        dispatch(setCompaniesAC(response.data))
    } catch {
        console.error("Не удалость изменить информацию о компании")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}

export const deleteCompanyCardTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        await companiesAPI.deleteCompaniesInfo(id);
    } catch {
        console.error("Не удалость удалить карточку компании")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}

export const deletePhotoTC = (companiesId: string, photoName: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        await photosAPI.deletePhoto(companiesId, photoName);
        dispatch(deletePhotoAC(photoName))
    } catch {
        console.error("Не удалость удалить фотографию")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeStatusPreloaderAC(true))
        let response = await photosAPI.addPhoto(file);
        dispatch(savePhotoSuccessAC(response.data))
    } catch {
        console.error("Не удалость добавить фотографию")
    } finally {
        dispatch(changeStatusPreloaderAC(false))
    }
}
