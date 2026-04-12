import { api } from "./api/api";

// Obtener los productos
export const getProductosRequest = () => api.get('/products');