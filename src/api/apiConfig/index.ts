import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
    ".eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NDM3MDcyNSwiZXhwIjoxNjU0OTc1NTI1fQ" +
    ".QlWrHhskS9aZUEPyDgXIzaqrDufKg622VbMuokx2XMY";

export const apiConfig = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
