import axios from "axios";

const URL_BACKEND = "https://dummyjson.com";

const api = axios.create({
    baseURL: URL_BACKEND
});

export { api };