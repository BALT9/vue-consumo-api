import { api } from "./api/api";

// Obtener los productos
export const getRecipesRequest = () => api.get('/recipes');