import { PRODUCTS_URL, UPLOAD_URL} from "../constants";
import { apiSlice } from "./apiSlice";

// So instead of fetch or axios we are using this
export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            providesTags: ['Products'],
            keyUnusedDataFor: 5
        }),
        getProductById: (builder).query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keyUnusedDataFor: 5
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
               url: `${PRODUCTS_URL}/${data.productId}` ,
               method: 'PUT',
               body: data,
            
            }),
            invalidatesTags: ['Products']
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Product']
        })
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation
    
     } = productApiSlice;