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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Authenticator />
    </>
  )
}

export default App
