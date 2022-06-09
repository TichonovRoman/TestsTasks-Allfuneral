import axios from 'axios'
import {newCompaniesInfoDataType, newContactsDataType} from "types/apiTypes";

//спрятать токен в env? Для этого проекта не надо
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
    ".eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NDM3MDcyNSwiZXhwIjoxNjU0OTc1NTI1fQ" +
    ".QlWrHhskS9aZUEPyDgXIzaqrDufKg622VbMuokx2XMY";

const instance = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

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
    getContacts(id: string) {
        return instance.get(`/contacts/${id}`)
    },
    patchContacts(newContacts: newContactsDataType) {
        return instance.patch(`/contacts/16`, newContacts, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    deletePhoto(companiesId: string, photoName: string) {
        return instance.delete(`/companies/${companiesId}/image/${photoName}`)
    },
    addPhoto(FILE: File) {
        let formData = new FormData();
        formData.append("file", FILE)
        return instance.post(`/companies/12/image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}

