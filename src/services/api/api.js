import axios from "axios";

const URL_BACKEND = "https://dummyjson.com";

export function api() {
    const api = axios.create({
        baseURL: URL_BACKEND
    });

    return api
}