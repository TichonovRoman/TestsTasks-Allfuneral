import {newCompaniesInfoDataType} from "types/apiTypes";

import {apiConfig} from "./apiConfig";
import {COMPANIES_ID} from "constants/index";

export const companiesAPI = {
    getCompaniesInfo() {
        return apiConfig.get(`/companies/${COMPANIES_ID}`)
    },
    patchCompaniesInfo(newInfo: newCompaniesInfoDataType) {
        return apiConfig.patch(`/companies/${COMPANIES_ID}`, newInfo, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    deleteCompaniesInfo(id: string) {
        return apiConfig.delete(`/companies/${id}`)
    },
}
