import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import {legacy_createStore as createStore} from 'redux'
import {companiesReducer} from "./companies-reducer";
import {contactsReducer} from "./contacts-reducer";

const rootReducer = combineReducers({
    companies: companiesReducer,
    contacts: contactsReducer,
  })


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootReducerType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;
