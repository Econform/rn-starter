import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNText from './RNText'
import colors from '../../config/colors'

const DetailSlice = ({ title, color }) => {
  return (
    <View style={styles.cell}>
      <RNText
        style={[
          styles.title,
          {
            color: color || colors.white,
          },
        ]}
      >
        {title}
      </RNText>
    </View>
  )
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
})

export default DetailSlice
