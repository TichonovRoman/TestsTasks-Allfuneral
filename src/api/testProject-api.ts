import axios from 'axios'


//спрятать токен в env

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NDM3MDcyNSwiZXhwIjoxNjU0OTc1NTI1fQ.QlWrHhskS9aZUEPyDgXIzaqrDufKg622VbMuokx2XMY";

const instance = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    withCredentials: false,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});


export type newCompaniesInfoDataType = {

    "name": string,
    "shortName": string,
    "businessEntity": string,
    // "contract": {
    //     no:  string,
    //     issue_date:  string,
    // },
    type: string[]

}
// api


export const authAPI = {
    getCompaniesInfo() {
        return instance.get(`/companies/12`)
    },
    patchCompaniesInfo(newInfo: newCompaniesInfoDataType) {

        return instance.patch(`/companies/12`, newInfo, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    deleteCompaniesInfo(id: string) {
        return instance.delete(`/companies/${id}`)
    },
}


// types

type MeResponseType = {
    "id": number,
    "login": string,
    "email": string
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
