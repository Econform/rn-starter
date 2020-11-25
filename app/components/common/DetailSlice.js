import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNText from './RNText'
import colors from 'app/config/colors'

const DetailSlice = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.title}>{title}</RNText>
      <RNText style={styles.content}>{content}</RNText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleContainer: {
    flex: 0.5,
    flexDirection: 'column',
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
  content: {
    color: colors.white,
    fontSize: 16,
    marginTop: 10,
    lineHeight: 30,
  },
})

export default DetailSlice
