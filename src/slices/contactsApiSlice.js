import { CONTACTS_URL } from "../urls";
import apiSlice from "./apiSlice";
const contactsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: CONTACTS_URL,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${CONTACTS_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByFirst: builder.query({
      query: first => ({
        url: `${CONTACTS_URL}/${first}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByLast: builder.query({
      query: last => ({
        url: `${CONTACTS_URL}/${last}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByRole: builder.query({
      query: role => ({
        url: `${CONTACTS_URL}/${role}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByAddress: builder.query({
      query: address => ({
        url: `${CONTACTS_URL}/${address}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByPhone: builder.query({
      query: phone => ({
        url: `${CONTACTS_URL}/${phone}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByEmail: builder.query({
      query: email => ({
        url: `${CONTACTS_URL}/${email}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getByRental: builder.query({
      query: rental => ({
        url: `${CONTACTS_URL}/${rental}`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${CONTACTS_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${CONTACTS_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['contact']
    }),
    add: builder.mutation({
      query: contact => ({
        url: CONTACTS_URL,
        method: 'POST',
        body: contact
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    editFirst: builder.mutation({
      query: (pk, first) => ({
        url: `${CONTACTS_URL}/${pk}/first`,
        method: 'PATCH',
        body: first
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    editLast: builder.mutation({
      query: (pk, last) => ({
        url: `${CONTACTS_URL}/${pk}/last`,
        method: 'PATCH',
        body: last
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    editRole: builder.mutation({
      query: (pk, role) => ({
        url: `${CONTACTS_URL}/${pk}/role`,
        method: 'PATCH',
        body: role
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    addAddress: builder.mutation({
      query: (pk, address) => ({
        url: `${CONTACTS_URL}/:${pk}/addresses`,
        method: 'POST',
        body: address
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    addAddresses: builder.mutation({
      query: (pk, addresses) => ({
        url: `${CONTACTS_URL}/:${pk}/addresses`,
        method: 'POST',
        body: addresses
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    replaceAddress: builder.mutation({
      query: (pk, index, address) => ({
        url: `${CONTACTS_URL}/${pk}/addresses/${index}`,
        method: 'PATCH',
        body: address
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    replaceAddresses: builder.mutation({
      query: (pk, addresses) => ({
        url: `${CONTACTS_URL}/${pk}/addresses/`,
        method: 'PATCH',
        body: addresses
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    deleteAddress: builder.mutation({
      query: (pk, index) => ({
        url: `${CONTACTS_URL}/${pk}/addresses/${index}`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    deleteAddresses: builder.mutation({
      query: pk => ({
        url: `${CONTACTS_URL}/${pk}/addresses`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    addPhone: builder.mutation({
      query: (pk, phone) => ({
        url: `${CONTACTS_URL}/:${pk}/phones`,
        method: 'POST',
        body: phone
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    addPhones: builder.mutation({
      query: (pk, phones) => ({
        url: `${CONTACTS_URL}/:${pk}/phones`,
        method: 'POST',
        body: phones
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    replacePhone: builder.mutation({
      query: (pk, index, phone) => ({
        url: `${CONTACTS_URL}/${pk}/addresses/${index}`,
        method: 'PATCH',
        body: phone
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    replacePhones: builder.mutation({
      query: (pk, phones) => ({
        url: `${CONTACTS_URL}/${pk}/phones/`,
        method: 'PATCH',
        body: phones
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    deletePhone: builder.mutation({
      query: (pk, index) => ({
        url: `${CONTACTS_URL}/${pk}/phones/${index}`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    deletePhones: builder.mutation({
      query: pk => ({
        url: `${CONTACTS_URL}/${pk}/phones`,
        method: 'DELETE'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${CONTACTS_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${CONTACTS_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'rental',
        'phone',
        'email',
        'agency',
        'address',
        'contact'
      ]
    })
  })
})

export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByFirstQuery,
  useLazyGetByFirstQuery,
  useGetByLastQuery,
  useLazyGetByLastQuery,
  useGetByRoleQuery,
  useLazyGetByRoleQuery,
  useGetByAddressQuery,
  useLazyGetByAddressQuery,
  useGetByPhoneQuery,
  useLazyGetByPhoneQuery,
  useGetByEmailQuery,
  useLazyGetByEmailQuery,
  useGetByRentalQuery,
  useLazyGetByRentalQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetInactiveQuery,
  useLazyGetInactiveQuery,
  useAddMutation,
  useEditFirstMutation,
  useEditLastMutation,
  useEditRoleMutation,
  useAddAddressMutation,
  useAddAddressesMutation,
  useReplaceAddressMutation,
  useReplaceAddressesMutation,
  useDeleteAddressMutation,
  useDeleteAddressesMutation,
  useAddPhoneMutation,
  useAddPhonesMutation,
  useReplacePhoneMutation,
  useReplacePhonesMutation,
  useDeletePhoneMutation,
  useDeletePhonesMutation,
  useActivateQuery,
  useDeactivateQuery
} = contactsApiSlice