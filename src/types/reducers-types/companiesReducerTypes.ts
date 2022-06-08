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