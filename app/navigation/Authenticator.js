import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'app/config'
import config from 'app/config'
import StorybookUI from 'storybook/'
import Dashboard from 'app/screens/Dashboard'
import Info from 'app/screens/Info'
import Detail from 'app/screens/Detail'

const Stack = createStackNavigator()

const Authenticator = () => {
  if (config.storybooksEnabled) {
    return (
      <View style={styles.storybookContainer}>
        <StorybookUI />
      </View>
    )
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Econform',
              headerStyle: {
                backgroundColor: colors.darkGrey,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              title: 'Econform',
              headerStyle: {
                backgroundColor: colors.darkGrey,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'Econform',
              headerStyle: {
                backgroundColor: colors.darkGrey,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  storybookContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 120,
  },
})

export default Authenticator
