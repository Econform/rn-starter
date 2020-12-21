import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-community/async-storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import rackings from './reducers/rackings'
import systems from './reducers/systems'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
}

const reducers = combineReducers({
  systems,
  rackings,
})
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
let persistor = persistStore(store)

export { store, persistor }
