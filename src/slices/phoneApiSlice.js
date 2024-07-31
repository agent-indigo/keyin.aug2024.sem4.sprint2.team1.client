import { PHONES_URL } from "../urls";
import apiSlice from "./apiSlice";
const phonesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: PHONES_URL,
        method: 'GET'
      }),
      prividesTags: ['phone']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${PHONES_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getByNumber: builder.query({
      query: number => ({
        url: `${PHONES_URL}/${number}`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${PHONES_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getByCategory: builder.query({
      query: category => ({
        url: `${PHONES_URL}/${category}`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getByLocation: builder.query({
      query: location => ({
        url: `${PHONES_URL}/${location}`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${PHONES_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${PHONES_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['phone']
    }),
    add: builder.mutation({
      query: phone => ({
        url: PHONES_URL,
        method: 'POST',
        body: phone
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    editNumber: builder.mutation({
      query: (pk, number) => ({
        url: `${PHONES_URL}/${pk}/number`,
        method: 'PATCH',
        body: number
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    switchCategory: builder.mutation({
      query: (pk, category) => ({
        url: `${PHONES_URL}/${pk}/category`,
        method: 'PATCH',
        body: category
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    addLocation: builder.mutation({
      query: (pk, location) => ({
        url: `${PHONES_URL}/:${pk}`,
        method: 'POST',
        body: location
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    deleteLocation: builder.mutation({
      query: (pk, location ) => ({
        url: `${PHONES_URL}/${pk}/location`,
        method: 'DELETE',
        body: location
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    addContact: builder.mutation({
      query: (pk, contact) => ({
        url: `${PHONES_URL}/${pk}/contacts`,
        method: 'POST',
        body: contact
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    addContacts: builder.mutation({
      query:(pk, contacts) => ({
        url: `${PHONES_URL}/${pk}`,
        method: 'POST',
        body: contacts
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    replaceContact: builder.mutation({
      query: (pk, index, contact) => ({
        url: `${PHONES_URL}/${pk}/contacts/${index}`,
        method: 'PATCH',
        body: contact
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    replaceContacts: builder.mutation({
      query: (pk, contacts) => ({
        url: `${PHONES_URL}/${pk}/contacts/`,
        method: 'PATCH',
        body: contacts
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    deleteContact: builder.mutation({
      query: (pk, index, contact) => ({
        url: `${PHONES_URL}/${pk}/contacts/${index}`,
        method: 'DELETE',
        body: contact
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    deleteContacts: builder.mutation({
      query: (pk, contacts) => ({
        url: `${PHONES_URL}/${pk}/contacts`,
        method: 'DELETE',
        body: contacts
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${PHONES_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${PHONES_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'contact',
        'phone'
      ]
    })
  })
})

export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByNumberQuery,
  useLazyGetByNumberQuery,
  useGetByContactQuery,
  useLazyGetByContactQuery,
  useGetByCategoryQuery,
  useLazyGetByCategoryQuery,
  useGetByLocationQuery,
  useLazyGetByLocationQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetInactiveQuery,
  useLazyGetInactiveQuery,
  useAddMutation,
  useEditNumberMutation,
  useSwitchCategoryMutation,
  useAddLocationMutation,
  useDeleteLocationMutation,
  useAddContactMutation,
  useAddContactsMutation,
  useReplaceContactMutation,
  useReplaceContactsMutation,
  useDeleteContactMutation,
  useDeleteContactsMutation,
  useActivateQuery,
  useDeactivateQuery
} = phonesApiSlice