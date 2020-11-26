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
      state.data = action.payload
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
export const selectData = ({ rackings }) => {
  Object.values(rackings.data)
}
export const selectDataLoading = ({ rackings }) => rackings.loading

export default slice.reducer
