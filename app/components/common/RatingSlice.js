import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNText from './RNText'
import colors from '../../config/colors'

const RatingSlice = ({ title, redValue, amberValue, greenValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <RNText style={styles.title}>{title}</RNText>
      </View>
      <View style={styles.row}>
        <View style={styles.columnHeader}>
          <RNText style={styles.redTitle}>Red</RNText>
        </View>

        <View style={styles.columnHeader}>
          <RNText style={styles.amberTitle}>Amber</RNText>
        </View>
        <View style={styles.columnHeader}>
          <RNText style={styles.greenTitle}>Green</RNText>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <RNText style={styles.title}>{redValue}</RNText>
        </View>
        <View style={styles.cell}>
          <RNText style={styles.title}>{amberValue}</RNText>
        </View>
        <View style={styles.cell}>
          <RNText style={styles.title}>{greenValue}</RNText>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  columnHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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
