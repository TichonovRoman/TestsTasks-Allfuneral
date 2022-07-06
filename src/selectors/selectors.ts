import {AppRootReducerType} from "../redux/store";
import {createSelector} from "reselect";

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
    getEmail:  (state: AppRootReducerType) => state.contacts.email,

}


// Reselect нужен при вычислении, которые делаем в селекторах. Он кэширует данные. Это так, для примера:

export const getSelectCompaniesState = createSelector(
    selectors.getSelectCompaniesState,
    companies => companies
);