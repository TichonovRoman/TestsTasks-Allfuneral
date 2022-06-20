import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NTU2Mjc1OCwiZXhwIjoxNjU2MTY3NTU4fQ.LnjiZ6mcat6Mwqf4Z4a1OIGxvPGYgTF66iaXOkNIZss";

export const apiConfig = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
