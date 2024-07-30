import {RENTALS_URL} from '../urls'
import apiSlice from './apiSlice'
const rentalsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: RENTALS_URL,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${RENTALS_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByVehicle: builder.query({
      query: vehicle => ({
        url: `${RENTALS_URL}/${vehicle}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByContact: builder.query({
      query: contact => ({
        url: `${RENTALS_URL}/${contact}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByLicense: builder.query({
      query: licence => ({
        url: `${RENTALS_URL}/${licence}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByAgency: builder.query({
      query: agency => ({
        url: `${RENTALS_URL}/${agency}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByRentedFrom: builder.query({
      query: location => ({
        url: `${RENTALS_URL}/rentedFrom/${location}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByRentedOn: builder.query({
      query: date => ({
        url: `${RENTALS_URL}/rentedOn/${date}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getDueToday: builder.query({
      query: () => ({
        url: `${RENTALS_URL}/dueToday`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getDueOn: builder.query({
      query: date => ({
        url: `${RENTALS_URL}/dueOn/${date}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByReturnedOn: builder.query({
      query: date => ({
        url: `${RENTALS_URL}/returnedOn/${date}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getByReturnedTo: builder.query({
      query: location => ({
        url: `${RENTALS_URL}/returnedTo/${location}`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${RENTALS_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getReturned: builder.query({
      query: () => ({
        url: `${RENTALS_URL}/returned`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    getOverdue: builder.query({
      query: () => ({
        url: `${RENTALS_URL}/overdue`,
        method: 'GET'
      }),
      providesTags: ['rental']
    }),
    rent: builder.mutation({
      query: rental => ({
        url: RENTALS_URL,
        method: 'POST',
        body: rental
      }),
      invalidatesTags: [
        'agency',
        'contact',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    swapVehicle: builder.mutation({
      query: (pk, vehicle) => ({
        url: `${RENTALS_URL}/${pk}/vehicle`,
        method: 'PATCH',
        body: vehicle
      }),
      invalidatesTags: [
        'agency',
        'contact',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    returnVehicle: builder.mutation({
      query: (pk, location) => ({
        url: `${RENTALS_URL}/${pk}/return`,
        method: 'PATCH',
        body: location
      }),
      invalidatesTags: [
        'agency',
        'contact',
        'location',
        'rental',
        'vehicle'
      ]
    })
  })
})
export const {
  useGetAllQuery,
  useLazyGetAllQuery,
  useGetByPkQuery,
  useLazyGetByPkQuery,
  useGetByVehicleQuery,
  useLazyGetByVehicleQuery,
  useGetByContactQuery,
  useLazyGetByContactQuery,
  useGetByLicenseQuery,
  useLazyGetByLicenseQuery,
  useGetByAgencyQuery,
  useLazyGetByAgencyQuery,
  useGetByRentedFromQuery,
  useLazyGetByRentedFromQuery,
  useGetByRentedOnQuery,
  useLazyGetByRentedOnQuery,
  useGetDueTodayQuery,
  useLazyGetDueTodayQuery,
  useGetDueOnQuery,
  useLazyGetDueOnQuery,
  useGetByReturnedOnQuery,
  useLazyGetByReturnedOnQuery,
  useGetByReturnedToQuery,
  useLazyGetByReturnedToQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetReturnedQuery,
  useLazyGetReturnedQuery,
  useGetOverdueQuery,
  useLazyGetOverdueQuery,
  useRentMutation,
  useSwapVehicleMutation,
  useReturnVehicleMutation
} = rentalsApiSlice