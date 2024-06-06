import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const ProductsApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce-node4.vercel.app' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
          query: () => `/products?limit=5`,
        })
    })
})
export const {useGetProductsQuery}= ProductsApi