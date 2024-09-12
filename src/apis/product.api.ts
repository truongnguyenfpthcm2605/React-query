import { Products } from "../types/product.type";
import http from "../utils/http";

export const getProductsLimit = (limit: number) => http.get<Products>('products',{
    params: {
        limit
    }
});