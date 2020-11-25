import { createSlice } from '@reduxjs/toolkit'
export const slice = createSlice({
  name: 'rackings',
  initialState: {
    loading: false,
    errorMessage: null,
    data: {},
  },
  reducers: {
    fetchRackings: (state) => {
      state.loading = true
      state.data = {}
    },
    fetchRackingsFulfilled: (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.errorMessage = null
    },
    fetchRackingsRejected: (state) => {
      state.loading = false
      state.errorMessage = 'Error data list'
    },
  },
})
export const {
  fetchRackings,
  fetchRackingsFulfilled,
  fetchRackingsRejected,
} = slice.actions
export const selectRackings = ({ rackings }) => Object.values(rackings.data)
export const selectRackingsLoading = ({ rackings }) => rackings.loading
export default slice.reducer
