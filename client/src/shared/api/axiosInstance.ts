import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        console.log("GLOBAL AXIOS ERROR:", error.response?.status);

        return Promise.reject(error);
    }
);