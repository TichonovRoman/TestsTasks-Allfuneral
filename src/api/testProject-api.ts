import axios from 'axios'


//спрятать токен в env

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NDM3MDcyNSwiZXhwIjoxNjU0OTc1NTI1fQ.QlWrHhskS9aZUEPyDgXIzaqrDufKg622VbMuokx2XMY";

const instance = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    withCredentials: false,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

// api


export const authAPI = {
    getCompaniesInfo() {
        return instance.get(`/companies/12`)
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
