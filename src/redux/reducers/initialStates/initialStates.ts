import {CompaniesStateType} from "types/reducers-types/companiesReducerTypes";
import {ContactsStateType} from "types/reducers-types/contactsReducerTypes";

export const companiesInitialState: CompaniesStateType = {
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

export const contactsInitialState: ContactsStateType = {
    id: "",
    lastname: "",
    firstname: "",
    patronymic: "",
    phone: "",
    email: "",
    createdAt: "",
    updatedAt: "",
}