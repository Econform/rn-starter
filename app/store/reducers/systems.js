import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from 'app/thunks'
export const slice = createSlice({
  name: 'systems',
  initialState: {
    loading: false,
    errorMessage: null,
    data: {},
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload.systems
      state.loading = false
      state.error = action.error
    },
    [fetchData.pending]: (state, action) => {
      state.loading = true
      state.error = action.error
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
  },
})
export const selectSystems = ({ systems }) => systems.data
export const selectSystemById = (id) => ({ systems }) =>
  systems &&
  systems.data.find((system) => {
    return system.id === id
  })
export const selectSystemsLoading = ({ systems }) => systems.loading

export default slice.reducer
