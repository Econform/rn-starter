import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import RNText from './RNText'
import colors from '../../config/colors'
import Icon from 'react-native-vector-icons/Ionicons'
const chevronIcon = (
  <Icon name="chevron-forward-outline" size={scale(20)} color={colors.white} />
)

const ComponentCell = ({ title, subTitle, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        accessible={true}
        style={styles.touchableContainer}
        activeOpacity={onPress ? 0.2 : 1}
      >
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <RNText style={styles.title}>{title}</RNText>
            <RNText style={styles.subTitle}>{subTitle}</RNText>
          </View>
          <View style={styles.iconContainer}>{chevronIcon}</View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginLeft: 20,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 15,
  },
  title: {
    color: colors.white,
    fontSize: scale(14),
  },
  subTitle: {
    color: colors.white,
    fontSize: scale(13),
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default ComponentCell
