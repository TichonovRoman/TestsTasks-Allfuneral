import {Dispatch} from "redux";
import {authAPI} from "../api/testProject-api";
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

export const SetCompaniesAC = (companiesInfo: CompaniesStateResponseType) => {
    return {
        type: "SET-COMPANIES",
        payload: {
            ...companiesInfo
        }
    } as const
}

export const EditNameInfoBlockAC = (infoBlockName: string) => {
    return {
        type: "EDIT-NAME-INFO-BLOCK",
        payload: {
            infoBlockName
        }
    } as const
}

export const ChangeStatusPreloaderAC = (isEnablePreloader: boolean) => {
    return {
        type: "CHANGE-STATUS-PRELOADER",
        payload: {
            isEnablePreloader
        }
    } as const
}

export const SavePhotoSuccessAC = (newPhotoData: PhotoDataType) => {
    return {
        type: "PHOTO_SUCCESS",
        payload: {
            newPhotoData
        }
    } as const
}

export const DeletePhotoAC = (photoName: string) => {
    return {

        type: "DELETE-PHOTO",
        payload: {
            photoName
        }
    } as const
}

export type SetCompaniesACType = ReturnType<typeof SetCompaniesAC>
export type ChangeStatusPreloaderACType = ReturnType<typeof ChangeStatusPreloaderAC>
export type EditNameInfoBlockACType = ReturnType<typeof EditNameInfoBlockAC>
export type SavePhotoSuccessACType = ReturnType<typeof SavePhotoSuccessAC>
export type DeletePhotoACType = ReturnType<typeof DeletePhotoAC>

export const SetCompaniesTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        let response = await authAPI.getCompaniesInfo();
        dispatch(SetCompaniesAC(response.data))
    } catch {
        console.error("Не удалость загрузить информацию о компании")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}

export const companyInfoEditTC = (newInfo: newCompaniesInfoDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        let response = await authAPI.patchCompaniesInfo(newInfo);
        dispatch(SetCompaniesAC(response.data))
    } catch {
        console.error("Не удалость изменить информацию о компании")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}

export const deleteCompanyCardTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        await authAPI.deleteCompaniesInfo(id);
    } catch {
        console.error("Не удалость удалить карточку компании")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}

export const deletePhotoTC = (companiesId: string, photoName: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        await authAPI.deletePhoto(companiesId, photoName);
        dispatch(DeletePhotoAC(photoName))
    } catch {
        console.error("Не удалость удалить фотографию")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(ChangeStatusPreloaderAC(true))
        let response = await authAPI.addPhoto(file);
        dispatch(SavePhotoSuccessAC(response.data))
    } catch {
        console.error("Не удалость добавить фотографию")
    } finally {
        dispatch(ChangeStatusPreloaderAC(false))
    }
}