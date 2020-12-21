/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar } from 'react-native'
import Authenticator from 'app/navigation/Authenticator'
import { store, persistor } from 'app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Authenticator />
      </PersistGate>
    </Provider>
  )
}

export default App
