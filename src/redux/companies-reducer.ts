import {Dispatch} from "redux";
import {authAPI, newCompaniesInfoDataType} from "../api/testProject-api";

export type PhotoDataType = {
    "name": string,
    "filepath": string,
    "thumbpath": string,
}

export type CompaniesStateType = {
    "id": string,
    "contactId": string,
    "name": string,
    "shortName": string,
    "businessEntity": string,
    "contract": {
        "no": string,
        "issue_date": string
    },
    "type": string[],
    "status": string,
    "createdAt": string,
    "updatedAt": string,
    "photosData": PhotoDataType[],
    infoBlockName: string,
    isEnablePreloader: boolean,
}

export type CompaniesStateResponseType = {
    "id": string,
    "contactId": string,
    "name": string,
    "shortName": string,
    "businessEntity": string,
    "contract": {
        "no": string,
        "issue_date": string
    },
    "type": string[],
    "status": string,
    "createdAt": string,
    "updatedAt": string,
    "photos": PhotoDataType[],
    infoBlockName: string,
    isEnablePreloader: boolean,
}

type ActionsType =
    SetCompaniesACType
    | ChangeStatusPreloaderACType
    | EditNameInfoBlockACType
    | SavePhotoSuccessACType
    | DeletePhotoACType

const initialState: CompaniesStateType = {
    id: "12",
    contactId: "16",
    name: "Полное тестовое имя",
    shortName: "Тестовое имя",
    businessEntity: "Тест",
    contract: {
        no: "12345",
        issue_date: "2015-03-12T00:00:00Z"
    },
    type: ["agent", "contractor"],
    status: "active",
    createdAt: "2020-11-21T08:03:00Z",
    updatedAt: "2020-11-23T09:30:00Z",
    photosData: [ //с сервера приходит "photos" - надо сэтать вручную. Если оставить имя photos - то баги!!!
        {
            name: "0.png",
            filepath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png",
            thumbpath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png"
        },
        {
            name: "0b8a91.png",
            filepath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png",
            thumbpath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png"
        },


    ],
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
            return {...state, ...action.payload}
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


export const SetCompaniesTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.getCompaniesInfo()
            .then((response) => {
                dispatch(SetCompaniesAC(response.data))
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

export const companyInfoEditTC = (newInfo: newCompaniesInfoDataType) => {
    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.patchCompaniesInfo(newInfo)
            .then((response) => {
                dispatch(SetCompaniesAC(response.data))
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

export const deleteCompanyCardTC = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.deleteCompaniesInfo(id)
            .then((response) => {
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

export const deletePhotoTC = (companiesId: string, photoName: string) => {
    return (dispatch: Dispatch) => {
        dispatch(ChangeStatusPreloaderAC(true))
        authAPI.deletePhoto(companiesId, photoName)
            .then((response) => {
                dispatch(DeletePhotoAC(photoName))
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



export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    alert("fgfg")
    let response = await authAPI.addPhoto(file);
    let data = response.data
    if (data.resultCode === 0) {
        dispatch(SavePhotoSuccessAC(data.data))
    }
}
