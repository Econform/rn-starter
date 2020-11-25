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
import store from 'app/store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Authenticator />
    </Provider>
  )
}

export default App
