import {LOCATIONS_URL} from "../urls"
import apiSlice from "./apiSlice"
const locationsApiSlice = apiSlice.injectEndpoints ({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: LOCATIONS_URL,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${LOCATIONS_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByAgency: builder.query({
      query: agency => ({
        url: `${LOCATIONS_URL}/${agency}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByAddress: builder.query({
      query: address => ({
        url: `${LOCATIONS_URL}/${address}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByPhone: builder.query({
      query: phone => ({
        url: `${LOCATIONS_URL}/${phone}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByVehicle: builder.query({
      query: vehicle => ({
        url: `${LOCATIONS_URL}/${vehicle}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    getByRental: builder.query({
      query: rental => ({
        url: `${LOCATIONS_URL}/${rental}`,
        method: 'GET'
      }),
      providesTags: ['location']
    }),
    add: builder.mutation({
      query: location => ({
        url: LOCATIONS_URL,
        method: 'POST',
        body: location
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    editAgency: builder.mutation({
      query: (pk, agency) => ({
        url: `${LOCATIONS_URL}/${pk}/agency`,
        method: 'PATCH',
        body: agency
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    editAddress: builder.mutation({
      query: (pk, address) => ({
        url: `${LOCATIONS_URL}/${pk}/address`,
        method: 'PATCH',
        body: address
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    editPhone: builder.mutation({
      query: (pk, phone) => ({
        url: `${LOCATIONS_URL}/${pk}/phone`,
        method: 'PATCH',
        body: phone
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    editHours: builder.mutation({
      query: (pk, hours) => ({
        url: `${LOCATIONS_URL}/${pk}/hours`,
        method: 'PATCH',
        body: hours
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${LOCATIONS_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${LOCATIONS_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'address',
        'vehicle',
        'rental',
        'phone',
        'agency',
        'location'
      ]
    })
  })
})
export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByAgencyQuery,
  useLazyGetByAgencyQuery,
  useGetByAddressQuery,
  useLazyGetByAddressQuery,
  useGetByPhoneQuery,
  useLazyGetByPhoneQuery,
  useGetByVehicleQuery,
  useLazyGetByVehicleQuery,
  useGetByRentalQuery,
  useLazyGetByRentalQuery,
  useAddMutation,
  useEditAgencyMutation,
  useEditAddressMutation,
  useEditPhoneMutation,
  useEditHoursMutation,
  useActivateQuery,
  useLazyActivateQuery,
  useDeactivateQuery,
  useLazyDeactivateQuery
} = locationsApiSlice