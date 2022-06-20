import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

import {companiesReducer} from "./reducers/companies-reducer";
import {contactsReducer} from "./reducers/contacts-reducer";

const rootReducer = combineReducers({
    companies: companiesReducer,
    contacts: contactsReducer,
  })

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootReducerType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;
