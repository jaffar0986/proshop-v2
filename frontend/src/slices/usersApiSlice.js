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
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        })
        
    }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;