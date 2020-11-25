import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import ListHeader from '../components/common/ListHeader'
import ListItem from '../components/common/ListItem'

const Info = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <ListHeader />
          <ListItem onPress={() => navigation.navigate('Detail')} />
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

export default Info
