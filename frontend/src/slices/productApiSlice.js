import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// So instead of fetch or axios we are using this
export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keyUnusedDataFor: 5
        }),
        getProductById: (builder).query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keyUnusedDataFor: 5
        })
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApiSlice;