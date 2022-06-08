import {AppRootReducerType} from "../redux/store";

export const selectors = {

    selectFullName: (state: AppRootReducerType) => state.companies.name,
    selectId: (state: AppRootReducerType) => state.companies.id,
    photosDataSelectors: (state: AppRootReducerType) => state.companies.photosData,
    infoBlockName: (state: AppRootReducerType) => state.companies.infoBlockName,

    selectContactsState: (state: AppRootReducerType) => state.contacts,
    selectCompaniesState: (state: AppRootReducerType) => state.companies,

    lastname:  (state: AppRootReducerType) => state.contacts.lastname,
    firstname:  (state: AppRootReducerType) => state.contacts.firstname,
    patronymic:  (state: AppRootReducerType) => state.contacts.patronymic,
    phoneNumber:  (state: AppRootReducerType) => state.contacts.phone.substring(1, 11),
    email:  (state: AppRootReducerType) => state.contacts.email,

}