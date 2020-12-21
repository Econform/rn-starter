import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from 'app/thunks'
export const slice = createSlice({
  name: 'rackings',
  initialState: {
    loading: false,
    errorMessage: null,
    data: {},
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload.rackings
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
export const selectRacking = ({ rackings }) => rackings.data
export const selectRackingsByIds = (rackingChildren) => ({ rackings }) =>
  rackings &&
  rackings.data.filter((racking) => {
    return rackingChildren.includes(racking.id)
  })
export const selectRackingById = (id) => ({ rackings }) =>
  rackings && rackings.data.find((racking) => racking.id === id)

export const selectRackingLoading = ({ rackings }) => rackings.loading

export default slice.reducer
