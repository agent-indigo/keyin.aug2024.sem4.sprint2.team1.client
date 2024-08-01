import {VEHICLES_URL} from '../urls'
import apiSlice from './apiSlice'
const vehiclesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: VEHICLES_URL,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByPk: builder.query({
      query: pk => ({
        url: `${VEHICLES_URL}/${pk}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByManufacturer: builder.query({
      query: manufacturer => ({
        url: `${VEHICLES_URL}/${manufacturer}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByModel: builder.query({
      query: model => ({
        url: `${VEHICLES_URL}/${model}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByYear: builder.query({
      query: year => ({
        url: `${VEHICLES_URL}/${year}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByCapacity: builder.query({
      query: capacity => ({
        url: `${VEHICLES_URL}/${capacity}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByCategory: builder.query({
      query: category => ({
        url: `${VEHICLES_URL}/${category}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByStdRate: builder.query({
      query: stdRate => ({
        url: `${VEHICLES_URL}/${stdRate}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByPremRate: builder.query({
      query: premRate => ({
        url: `${VEHICLES_URL}/${premRate}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByStdIns: builder.query({
      query: stdIns => ({
        url: `${VEHICLES_URL}/${stdIns}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByPremIns: builder.query({
      query: premIns => ({
        url: `${VEHICLES_URL}/${premIns}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByPlates: builder.query({
      query: plates => ({
        url: `${VEHICLES_URL}/${plates}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByAgency: builder.query({
      query: agency => ({
        url: `${VEHICLES_URL}/${agency}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByLocation: builder.query({
      query: location => ({
        url: `${VEHICLES_URL}/${location}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByRental: builder.query({
      query: rental => ({
        url: `${VEHICLES_URL}/${rental}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getRented: builder.query({
      query: () => ({
        url: `${VEHICLES_URL}/rented`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getAvailable: builder.query({
      query: () => ({
        url: `${VEHICLES_URL}/available`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getActive: builder.query({
      query: () => ({
        url: `${VEHICLES_URL}/active`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getInactive: builder.query({
      query: () => ({
        url: `${VEHICLES_URL}/inactive`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByStdUnder: builder.query({
      query: max => ({
        url: `${VEHICLES_URL}/stdUnder/${max}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    getByPremUnder: builder.query({
      query: max => ({
        url: `${VEHICLES_URL}/premUnder/${max}`,
        method: 'GET'
      }),
      providesTags: ['vehicle']
    }),
    add: builder.mutation({
      query: vehicle => ({
        url: VEHICLES_URL,
        method: 'POST',
        body: vehicle
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editManufacturer: builder.mutation({
      query: (pk, manufacturer) => ({
        url: `${VEHICLES_URL}/${pk}/manufacturer`,
        method: 'PATCH',
        body: manufacturer
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editModel: builder.mutation({
      query: (pk, model) => ({
        url: `${VEHICLES_URL}/${pk}/model`,
        method: 'PATCH',
        body: model
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editYear: builder.mutation({
      query: (pk, year) => ({
        url: `${VEHICLES_URL}/${pk}/year`,
        method: 'PATCH',
        body: year
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editCapacity: builder.mutation({
      query: (pk, capaticy) => ({
        url: `${VEHICLES_URL}/${pk}/capacity`,
        method: 'PATCH',
        body: capaticy
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editCategory: builder.mutation({
      query: (pk, category) => ({
        url: `${VEHICLES_URL}/${pk}/category`,
        method: 'PATCH',
        body: category
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editStdRate: builder.mutation({
      query: (pk, stdRate) => ({
        url: `${VEHICLES_URL}/%{pk}/stdRate`,
        method: 'PATCH',
        body: stdRate
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editPremRate: builder.mutation({
      query: (pk, premRate) => ({
        url: `${VEHICLES_URL}/${pk}/premRate`,
        method: 'PATCH',
        body: premRate
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editStdIns: builder.mutation({
      query: (pk, stdIns) => ({
        url: `${VEHICLES_URL}/${pk}/stdIns`,
        method: 'PATCH',
        body: stdIns
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editPremIns: builder.mutation({
      query: (pk, premIns) => ({
        url: `${VEHICLES_URL}/${pk}/premIns`,
        method: 'PATCH',
        body: premIns
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editPlates: builder.mutation({
      query: (pk, plates) => ({
        url: `${VEHICLES_URL}/${pk}/plates`,
        method: 'PATCH',
        body: plates
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editAgency: builder.mutation({
      query: (pk, agency) => ({
        url: `${VEHICLES_URL}/${pk}/agency`,
        method: 'PATCH',
        body: agency
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    editLocation: builder.mutation({
      query: (pk, location) => ({
        url: `${VEHICLES_URL}/${pk}/location`,
        method: 'PATCH',
        body: location
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    activate: builder.query({
      query: pk => ({
        url: `${VEHICLES_URL}/${pk}/activate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'agency',
        'location',
        'rental',
        'vehicle'
      ]
    }),
    deactivate: builder.query({
      query: pk => ({
        url: `${VEHICLES_URL}/${pk}/deactivate`,
        method: 'GET'
      }),
      invalidatesTags: [
        'agency',
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
  useGetByManufacturerQuery,
  useLazyGetByManufacturerQuery,
  useGetByModelQuery,
  useLazyGetByModelQuery,
  useGetByYearQuery,
  useLazyGetByYearQuery,
  useGetByCapacityQuery,
  useLazyGetByCapacityQuery,
  useGetByCategoryQuery,
  useLazyGetByCategoryQuery,
  useGetByStdRateQuery,
  useLazyGetByStdRateQuery,
  useGetByPremRateQuery,
  useLazyGetByPremRateQuery,
  useGetByStdInsQuery,
  useLazyGetByStdInsQuery,
  useGetByPremInsQuery,
  useLazyGetByPremInsQuery,
  useGetByPlatesQuery,
  useLazyGetByPlatesQuery,
  useGetByAgencyQuery,
  useLazyGetByAgencyQuery,
  useGetByLocationQuery,
  useLazyGetByLocationQuery,
  useGetByRentalQuery,
  useLazyGetByRentalQuery,
  useGetRentedQuery,
  useLazyGetRentedQuery,
  useGetAvailableQuery,
  useLazyGetAvailableQuery,
  useGetActiveQuery,
  useLazyGetActiveQuery,
  useGetByStdUnderQuery,
  useLazyGetByStdUnderQuery,
  useGetByPremUnderQuery,
  useLazyGetByPremUnderQuery,
  useAddMutation,
  useEditManufacturerMutation,
  useEditModelMutation,
  useEditYearMutation,
  useEditCapacityMutation,
  useEditCategoryMutation,
  useEditStdRateMutation,
  useEditPremRateMutation,
  useEditStdInsMutation,
  useEditPremInsMutation,
  useEditPlatesMutation,
  useEditAgencyMutation,
  useEditLocationMutation,
  useActivateQuery,
  useLazyActivateQuery,
  useDeactivateQuery,
  useLazyDeactivateQuery
} = vehiclesApiSlice