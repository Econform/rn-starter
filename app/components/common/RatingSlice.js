import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNText from './RNText'
import RatingCell from './RatingCell'
import colors from 'app/config/colors'

const RatingSlice = ({ title, redValue, amberValue, greenValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <RNText style={styles.title}>{title}</RNText>
      </View>
      <View style={styles.row}>
        <RatingCell title="Red" color={colors.red} />
        <RatingCell title="Amber" color={colors.amber} />
        <RatingCell title="Green" color={colors.green} />
      </View>
      <View style={styles.breakerContainer}>
        <View style={styles.horizontalLine} />
        <View style={styles.horizontalLine} />
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.row}>
        <RatingCell title={redValue} />
        <RatingCell title={amberValue} />
        <RatingCell title={greenValue} />
      </View>
      <View style={styles.valueContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  breakerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  horizontalLine: {
    flex: 0.2,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  redTitle: {
    color: colors.red,
    fontSize: 16,
  },
  amberTitle: {
    color: colors.amber,
    fontSize: 16,
  },
  greenTitle: {
    color: colors.green,
    fontSize: 16,
  },
})

export default RatingSlice
