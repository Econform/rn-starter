import { createAsyncThunk } from '@reduxjs/toolkit'
import EconformApi from 'app/api'

export const fetchData = createAsyncThunk('rackings/fetchData', async () => {
  const response = await EconformApi.fetchData()
  return response.data
})
