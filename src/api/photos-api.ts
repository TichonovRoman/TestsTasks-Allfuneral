import {apiConfig} from "./apiConfig";

export const photosAPI = {

    deletePhoto(companiesId: string, photoName: string) {
        return apiConfig.delete(`/companies/${companiesId}/image/${photoName}`)
    },
    addPhoto(FILE: File) {
        let formData = new FormData();
        formData.append("file", FILE)
        return apiConfig.post(`/companies/12/image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}
