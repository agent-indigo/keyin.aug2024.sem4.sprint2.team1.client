import {EMAILS_URL} from '../urls'
import apiSlice from './apiSlice'
const emailsApiSlice = apiSlice.injectEndpoints ({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: EMAILS_URL,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getByAddress: builder.query({
      query: address => ({
        url: `${EMAILS_URL}/${address}`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${EMAILS_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getByCategory: builder.query({
      query: category => ({
        url: `${EMAILS_URL}/${category}`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${EMAILS_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${EMAILS_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['email']
    }),
    add: builder.mutation({
      query: email => ({
        url: EMAILS_URL,
        method: 'POST',
        body: email
      }),
      invalidatesTags: [
        'contact',
        'email'
      ]
    }),
    editAddress: builder.mutation({
      query: (pk, address) => ({
        url: `${EMAILS_URL}/${pk}/address`,
        method: 'PATCH',
        body: address
      }),
      invalidatesTags: [
        'contact',
        'email'
      ]
    }),
    editCategory: builder.mutation({
      query: (pk, category) => ({
        url: `${EMAILS_URL}/${pk}/category`,
        method: 'PATCH',
        body: category
      }),
      invalidatesTags: [
        'contact',
        'email'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'contact',
        'email'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'contact',
        'email'
      ]
    })
  })
})
export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByAddressQuery,
  useLazyGetByAddressQuery,
  useGetByContactQuery,
  useLazyGetByContactQuery,
  useGetByCategoryQuery,
  useLazyGetByCategoryQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetInactiveQuery,
  useLazyGetInactiveQuery,
  useAddMutation,
  useEditAddressMutation,
  useEditCategoryMutation,
  useActivateQuery,
  useLazyActivateQuery,
  useDeactivateQuery,
  useLazyDeactivateQuery
} = emailsApiSlice