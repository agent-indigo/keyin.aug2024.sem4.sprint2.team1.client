import { ADDRESSES_URL } from "../urls";
import apiSlice from "./apiSlice";
const addressesApiSlice = apiSlice.injectEndpoints ({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: ADDRESSES_URL,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${ADDRESSES_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByNumber: builder.query({
      query: number => ({
        url: `${ADDRESSES_URL}/${number}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByStreet: builder.query({
      query: street => ({
        url: `${ADDRESSES_URL}/${street}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByUnit: builder.query({
      query: unit => ({
        url: `${ADDRESSES_URL}/${unit}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByCity: builder.query({
      query: city => ({
        url: `${ADDRESSES_URL}/${city}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByProv: builder.query({
      query: prov => ({
        url: `${ADDRESSES_URL}/${prov}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByPostal: builder.query({
      query: postal => ({
        url: `${ADDRESSES_URL}/${postal}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByCategory: builder.query({
      query: category => ({
        url: `${ADDRESSES_URL}/${category}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${ADDRESSES_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getByLocation: builder.query({
      query: location => ({
        url: `${ADDRESSES_URL}/${location}`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${ADDRESSES_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${ADDRESSES_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['address']
    }),
    add: builder.mutation({
      query: address => ({
        url: ADDRESSES_URL,
        method: 'POST',
        body: address
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editNumber: builder.mutation({
      query: (pk, number) => ({
        url: `${ADDRESSES_URL}/${pk}/number`,
        method: 'PATCH',
        body: number
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editStreet: builder.mutation({
      query: (pk, street) => ({
        url: `${ADDRESSES_URL}/${pk}/street`,
        method: 'PATCH',
        body: street
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editUnit: builder.mutation({
      query: (pk, unit) => ({
        url: `${ADDRESSES_URL}/${pk}/unit`,
        method: 'PATCH',
        body: unit
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editCity: builder.mutation({
      query: (pk, city) => ({
        url: `${ADDRESSES_URL}/${pk}/city`,
        method: 'PATCH',
        body: city
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editProvTerr: builder.mutation({
      query: (pk, prov) => ({
        url: `${ADDRESSES_URL}/${pk}/prov`,
        method: 'PATCH',
        body: prov
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editPostal: builder.mutation({
      query: (pk, postal) => ({
        url: `${ADDRESSES_URL}/${pk}/postal`,
        method: 'PATCH',
        body: postal
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    editCategory: builder.mutation({
      query: (pk, category) => ({
        url: `${ADDRESSES_URL}/${pk}/category`,
        method: 'PATCH',
        body: category
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    addContact: builder.mutation({
      query: (pk, contact) => ({
        url: `${ADDRESSES_URL}/:${pk}`,
        method: 'POST',
        body: contact
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    addContacts: builder.mutation({
      query: (pk, contacts) => ({
        url: `${ADDRESSES_URL}/:${pk}`,
        method: 'POST',
        body: contacts
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    replaceContact: builder.mutation({
      query: (pk, index, contact) => ({
        url: `${ADDRESSES_URL}/${pk}/contacts/${index}`,
        method: 'PATCH',
        body: contact
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    replaceContacts: builder.mutation({
      query: (pk, contacts) => ({
        url: `${ADDRESSES_URL}/${pk}/contacts`,
        method: 'PATCH',
        body: contacts
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    deleteContact: builder.mutation({
      query: (pk, index) => ({
        url: `${ADDRESSES_URL}/${pk}/contacts/${index}`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    deleteContacts: builder.mutation({
      query: pk => ({
        url: `${ADDRESSES_URL}/${pk}/contacts`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${ADDRESSES_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${ADDRESSES_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'location',
        'contact',
        'address'
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
  useGetByStreetQuery,
  useLazyGetByStreetQuery,
  useGetByUnitQuery,
  useLazyGetByUnitQuery,
  useGetByCityQuery,
  useLazyGetByCityQuery,
  useGetByProvQuery,
  useLazyGetByProvQuery,
  useGetByPostalQuery,
  useLazyGetByPostalQuery,
  useGetByCategoryQuery,
  useLazyGetByCategoryQuery,
  useGetByContactQuery,
  useLazyGetByContactQuery,
  useGetByLocationQuery,
  useLazyGetByLocationQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetInactiveQuery,
  useLazyGetInactiveQuery,
  useAddMutation,
  useEditNumberMutation,
  useEditStreetMutation,
  useEditUnitMutation,
  useEditCityMutation,
  useEditProvTerrMutation,
  useEditPostalMutation,
  useEditCategoryMutation,
  useAddContactMutation,
  useAddContactsMutation,
  useReplaceContactMutation,
  useReplaceContactsMutation,
  useDeleteContactMutation,
  useDeleteContactsMutation,
  useActivateQuery,
  useLazyActivateQuery,
  useDeactivateQuery,
  useLazyDeactivateQuery
} = addressesApiSlice