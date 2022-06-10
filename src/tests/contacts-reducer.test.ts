import {ContactsStateType} from "types/reducers-types/contactsReducerTypes";
import {contactsReducer, setContactsAC} from "redux/contacts-reducer";

let startState: ContactsStateType = {
    id: "",
    lastname: "",
    firstname: "",
    patronymic: "",
    phone: "",
    email: "",
    createdAt: "",
    updatedAt: "",
};

beforeEach(() => {
    startState = {
        id: "",
        lastname: "",
        firstname: "",
        patronymic: "",
        phone: "",
        email: "",
        createdAt: "",
        updatedAt: "",
    }
})

test('the contacts must be set correctly', () => {
    const newContactResponse = {
        id: "18",
        lastname: "Хренова",
        firstname: "Гадя",
        patronymic: "Петрович",
        phone: "799999999",
        email: "gadya@atas.com",
        createdAt: "1900-11-21T08:03:26.589Z",
        updatedAt: "1901-06-09T07:56:08.129Z"
    }

    const endState = contactsReducer(startState, setContactsAC(newContactResponse))

    expect(endState.id).toBe("18");
    expect(endState.lastname).toBe("Хренова");
    expect(endState.firstname).toBe("Гадя");
    expect(endState.patronymic).toBe("Петрович");
    expect(endState.phone).toBe("799999999");
    expect(endState.email).toBe("gadya@atas.com");
    expect(endState.createdAt).toBe("1900-11-21T08:03:26.589Z");
    expect(endState.updatedAt).toBe("1901-06-09T07:56:08.129Z");
});


