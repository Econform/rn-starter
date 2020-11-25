import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import ListHeader from '../components/common/ListHeader'
import DetailSlice from '../components/common/DetailSlice'
import RatingSlice from '../components/common/RatingSlice'

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <ListHeader />
          <DetailSlice title={'Test title'} content={'test content'} />
          <RatingSlice title={'Test title'} content={'test content'} />
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

export default Detail
