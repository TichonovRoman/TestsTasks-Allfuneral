import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUk9NQSIsImlhdCI6MTY1NzEzNjcwNSwiZXhwIjoxNjU3NzQxNTA1fQ.dYiXmvuNjXkxPpkSCu9kvKP4J1zvxol4r8lPKIyCNkg";

export const apiConfig = axios.create({
    baseURL: "http://135.181.35.61:2112/",
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
