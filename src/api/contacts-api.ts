import {newContactsDataType} from "types/apiTypes";

import {apiConfig} from "./apiConfig";

export const contactsAPI = {

    getContacts(id: string) {
        return apiConfig.get(`/contacts/${id}`)
    },
    patchContacts(newContacts: newContactsDataType) {
        return apiConfig.patch(`/contacts/16`, newContacts, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
}
