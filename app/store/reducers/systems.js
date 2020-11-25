import { createSlice } from '@reduxjs/toolkit'
export const slice = createSlice({
  name: 'systems',
  initialState: {
    loading: false,
    errorMessage: null,
    data: {},
  },
  reducers: {
    fetchSystems: (state) => {
      state.loading = true
      state.data = {}
    },
    fetchSystemsFulfilled: (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.errorMessage = null
    },
    fetchSystemsRejected: (state) => {
      state.loading = false
      state.errorMessage = 'Error: Unable to fetch rackings'
    },
  },
})
export const {
  fetchSystems,
  fetchSystemsFulfilled,
  fetchSystemsRejected,
} = slice.actions
export const selectSystems = ({ systems }) => Object.values(systems.data)
export const selectSystemsLoading = ({ systems }) => systems.loading
export const selectSystemsError = ({ systems }) => systems.errorMessage
export default slice.reducer
