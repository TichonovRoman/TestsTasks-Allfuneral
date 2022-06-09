import {AppRootReducerType} from "../redux/store";

export const selectors = {

    getSelectFullName: (state: AppRootReducerType) => state.companies.name,
    getSelectId: (state: AppRootReducerType) => state.companies.id,
    getPhotosDataSelectors: (state: AppRootReducerType) => state.companies.photosData,
    getInfoBlockName: (state: AppRootReducerType) => state.companies.infoBlockName,

    getSelectContactsState: (state: AppRootReducerType) => state.contacts,
    getSelectCompaniesState: (state: AppRootReducerType) => state.companies,

    getLastname:  (state: AppRootReducerType) => state.contacts.lastname,
    getFirstname:  (state: AppRootReducerType) => state.contacts.firstname,
    getPatronymic:  (state: AppRootReducerType) => state.contacts.patronymic,
    // phoneNumber:  (state: AppRootReducerType) => state.contacts.phone.substring(1, 11),
    getEmail:  (state: AppRootReducerType) => state.contacts.email,

}
