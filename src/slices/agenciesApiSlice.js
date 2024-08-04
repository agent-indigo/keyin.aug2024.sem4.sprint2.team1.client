import {AGENCIES_URL} from '../urls'
import apiSlice from './apiSlice'
const agenciesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: AGENCIES_URL,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${AGENCIES_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByName: builder.query({
      query: name => ({
        url: `${AGENCIES_URL}/${name}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByWebsite: builder.query({
      query: website => ({
        url: `${AGENCIES_URL}/${website}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByLocation: builder.query({
      query: location => ({
        url: `${AGENCIES_URL}/${location}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${AGENCIES_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByVehicle: builder.query({
      query: vehicle => ({
        url: `${AGENCIES_URL}/${vehicle}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getByRental: builder.query({
      query: rental => ({
        url: `${AGENCIES_URL}/${rental}`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${AGENCIES_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${AGENCIES_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['agency']
    }),
    add: builder.mutation({
      query: agency => ({
        url: AGENCIES_URL,
        method: 'POST',
        body: agency
      }),
      invalidatesTags: [
        'vehicle',
        'location',
        'rental',
        'agency'
      ]
    }),
    rename: builder.mutation({
      query: (pk, name) => ({
        url: `${AGENCIES_URL}/${pk}/name`,
        method: 'PATCH',
        body: name
      }),
      invalidatesTags: [
        'vehicle',
        'location',
        'rental',
        'agency'
      ]
    }),
    editWebsite: builder.mutation({
      query: (pk, website) => ({
        url: `${AGENCIES_URL}/${pk}/website`,
        method: 'PATCH',
        body: website
      }),
      invalidatesTags: [
        'vehicle',
        'location',
        'rental',
        'agency'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${AGENCIES_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'vehicle',
        'location',
        'rental',
        'agency'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${AGENCIES_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'vehicle',
        'location',
        'rental',
        'agency'
      ]
    })
  })
})
export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByNameQuery,
  useLazyGetByNameQuery,
  useGetByWebsiteQuery,
  useLazyGetByWebsiteQuery,
  useGetByLocationQuery,
  useLazyGetByLocationQuery,
  useGetByContactQuery,
  useLazyGetByContactQuery,
  useGetByVehicleQuery,
  useLazyGetByVehicleQuery,
  useGetByRentalQuery,
  useLazyGetByRentalQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetInactiveQuery,
  useLazyGetInactiveQuery,
  useAddMutation,
  useRenameMutation,
  useEditWebsiteMutation,
  useActivateQuery,
  useLazyActivateQuery,
  useDeactivateQuery,
  useLazyDeactivateQuery
} = agenciesApiSlice