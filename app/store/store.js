import { configureStore } from '@reduxjs/toolkit'
import rackings from './reducers/rackings'

const reducer = {
  rackings,
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
