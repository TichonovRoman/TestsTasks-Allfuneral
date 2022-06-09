import {ChangeEvent, useCallback, useState} from "react";


export const useLastNameInputHook = (lastname: string) => {
    const [changedLastname, setChangedLastname] = useState<string>(lastname);
    const handleSetChangedLastnameChange = useCallback ((event: ChangeEvent<HTMLInputElement>) =>
            setChangedLastname(event.currentTarget.value),
        [])
    return {changedLastname, handleSetChangedLastnameChange}
}

export const useFirstnameInputHook = (firstname: string) => {
    const [changedFirstname, setChangedFirstname] = useState<string>(firstname);
    const handleSetChangedFirstnameChange = useCallback((event: ChangeEvent<HTMLInputElement>) =>
            setChangedFirstname(event.currentTarget.value),
        []);
    return {changedFirstname, handleSetChangedFirstnameChange}
}

export const usePatronymicInputHook = (patronymic: string) => {
    const [changedPatronymic, setChangedPatronymic] = useState<string>(patronymic);
    const handleSetChangedPatronymicChange = useCallback((event: ChangeEvent<HTMLInputElement>) =>
            setChangedPatronymic(event.currentTarget.value),
        []);
    return {changedPatronymic, handleSetChangedPatronymicChange}
}

export const usePhoneNumberInputHook = (phone: string) => {
    const [changedPhoneNumber, setChangedPhoneNumber] = useState<string>(phone.substring(1, 11));
    const handleSetChangedPhoneNumberChange = useCallback((event: ChangeEvent<HTMLInputElement>) =>
            setChangedPhoneNumber(event.currentTarget.value),
        [])
    return {changedPhoneNumber, handleSetChangedPhoneNumberChange}
}

export const useEmailInputHook = (email: string) => {
    const [changedEmail, setChangedEmail] = useState<string>(email);
    const handleSetChangedEmailChange = useCallback((event1: ChangeEvent<HTMLInputElement>) =>
            setChangedEmail(event1.currentTarget.value),
        []);
    return {changedEmail, handleSetChangedEmailChange}
}