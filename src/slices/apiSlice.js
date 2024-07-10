import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({}),
  endpoints: builder => ({})
})
export default apiSlice