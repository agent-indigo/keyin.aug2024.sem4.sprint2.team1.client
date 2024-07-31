import { EMAILS_URL } from "../urls";
import apiSlice from "./apiSlice";

const emailsApiSlice = apiSlice.injectEndpoints ({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: EMAILS_URL,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getByAddress: builder.query({
      query: address => ({
        url: `${EMAILS_URL}/${address}`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${EMAILS_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getByCategory: builder.query({
      query: category => ({
        url: `${EMAILS_URL}/${category}`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${EMAILS_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${EMAILS_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    add: builder.mutation({
      query: email => ({
        url: EMAILS_URL,
        method: 'POST',
        body: email
      }),
      invalidatesTags: [
        'category',
        'contact',
        'address',
        'emails'
      ]
    }),
    editAddress: builder.mutation({
      query: (pk, address) => ({
        url: `${EMAILS_URL}/${pk}/address`,
        method: 'PATCH',
        body: address
      }),
      invalidatesTags: [
        'category',
        'contact',
        'address',
        'emails'
      ]
    }),
    editCategory: builder.mutation({
      query: (pk, category) => ({
        url: `${EMAILS_URL}/${pk}/category`,
        method: 'PATCH',
        body: category
      }),
      invalidatesTags: [
        'category',
        'contact',
        'address',
        'emails'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}/activate`,
        method: 'GET'
      }),
      providesTags: ['emails']
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${EMAILS_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      providesTags: ['emails']
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
