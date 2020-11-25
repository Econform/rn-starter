import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import { useSelector } from 'react-redux'
import {
  selectRackings,
  selectRackingsLoading,
} from 'app/store/reducers/rackings'
import SystemCell from '../components/common/SystemCell'

const Dashboard = ({ navigation }) => {
  const rackings = useSelector(selectRackings)
  const isLoading = useSelector(selectRackingsLoading)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <SystemCell
            title="Pallet Racking"
            iconName="hammer-outline"
            onPress={() => navigation.navigate('Info')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
})

export default Dashboard
