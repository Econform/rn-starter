import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import { useSelector } from 'react-redux'
import ListHeader from '../components/common/ListHeader'
import DetailSlice from '../components/common/DetailSlice'
import RatingSlice from '../components/common/RatingSlice'
import { selectRackingById } from '../store/reducers/rackings'

const Detail = ({ route }) => {
  const rackingId = route.params?.id
  const racking = useSelector(selectRackingById(rackingId))
  const { levels } = racking.fields
  const levelSections = levels.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = []
    }
    acc[item.name].push(item)
    return acc
  }, {})
  const RatingSlices = () => {
    return Object.values(levelSections).map((levelSection, index) => {
      console.log(levelSection)
      const name = levelSection[0].name
      const red = levelSection.find((section) => {
        return section.level === 'Red'
      })
      const amber = levelSection.find((section) => {
        return section.level === 'Amber'
      })
      const green = levelSection.find((section) => {
        return section.level === 'Green'
      })
      return (
        <RatingSlice
          key={index}
          title={name}
          content={'test content'}
          redValue={red && red.value}
          amberValue={amber && amber.value}
          greenValue={green && green.value}
        />
      )
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <ListHeader
            images={
              racking.fields.galleries[0] && racking.fields.galleries[0].image
            }
          />
          <DetailSlice
            title={'What it is?'}
            content={racking.fields.what_it_is}
          />
          <DetailSlice
            title={'What it does?'}
            content={racking.fields.what_it_does}
          />
          <RatingSlices />
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
