import axios from 'axios'


//спрятать токен в env

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NDM3MDcyNSwiZXhwIjoxNjU0OTc1NTI1fQ.QlWrHhskS9aZUEPyDgXIzaqrDufKg622VbMuokx2XMY";

const instance = axios.create({
    baseURL: "http://135.181.35.61:2112/",
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
export type newContactsDataType = {
    "lastname":string,
    "firstname":string,
    "patronymic":string,
    "phone":string,
    "email":string,
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
}

