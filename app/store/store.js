import { configureStore } from '@reduxjs/toolkit'
import rackings from './reducers/rackings'
import systems from './reducers/rackings'

const reducer = {
  rackings,
  systems,
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
