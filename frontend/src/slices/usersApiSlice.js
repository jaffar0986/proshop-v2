import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// So instead of fetch or axios we are using this
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
            keyUnusedDataFor: 5,
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
                body: data,
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        })
        
    }),
});

export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation,
    useProfileMutation 
} = usersApiSlice;