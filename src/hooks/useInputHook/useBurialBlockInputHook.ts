import {ChangeEvent, useState} from "react";

export const useDataInputHook = (finishData: string) => {
    const [changedDataValue, setChangedDataValue] = useState<any>(finishData)
    const handleSetChangedDataValueChange = (event: ChangeEvent<HTMLInputElement>) => setChangedDataValue(event.currentTarget.value)
    return {changedDataValue, handleSetChangedDataValueChange}
}

export const useNumberInputHook = (contractNumber: string) => {
    const [changedNumberValue, setChangedNumberValue] = useState(contractNumber)
    const handleSetChangedNumberValueChange = (event: ChangeEvent<HTMLInputElement>) => setChangedNumberValue(event.currentTarget.value)
    return {changedNumberValue, handleSetChangedNumberValueChange}
}

export const useBusinessEntityInputHook = (businessEntity: string) => {
    const [changedBusinessEntityValue, setChangedBusinessEntityValue] = useState(businessEntity)
    const handleSetChangedBusinessEntityValueChange = (event: ChangeEvent<HTMLInputElement>) => setChangedBusinessEntityValue(event.currentTarget.value)
    return {changedBusinessEntityValue, handleSetChangedBusinessEntityValueChange}
}

export const useCompaniesTypeInputHook = (companiesTypeInfo: string) => {
    const [changedCompaniesTypeInfoValue, setChangedCompaniesTypeInfoValue] = useState(companiesTypeInfo)
    const handleSetChangedCompaniesTypeInfoValueChange = (event: ChangeEvent<HTMLInputElement>) => setChangedCompaniesTypeInfoValue(event.currentTarget.value)
    return {changedCompaniesTypeInfoValue, handleSetChangedCompaniesTypeInfoValueChange}
}

export const useNameValueInputHook = (fullName: string) => {
    const [changedNameValue, setChangedNameValue] = useState(fullName)
    const handleSetChangedNameValueChange = (event: ChangeEvent<HTMLInputElement>) => setChangedNameValue(event.currentTarget.value)
    return {changedNameValue, handleSetChangedNameValueChange}
}

