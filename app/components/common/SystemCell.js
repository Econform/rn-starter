import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome'
import FastImage from 'react-native-fast-image'
import colors from 'app/config/colors'
import RNText from './RNText'

const SystemCell = ({ imageUrl, iconName, title, onPress, titleColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      activeOpacity={onPress ? 0.2 : 1}
      style={styles.container}
    >
      <FastImage
        imageStyle={{ borderRadius: 6 }}
        source={{ uri: imageUrl }}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          {iconName && (
            <View style={styles.icon}>
              <Icon
                name={iconName}
                size={scale(20)}
                color={titleColor || colors.white}
              />
            </View>
          )}
          <RNText style={styles.title}>{title}</RNText>
        </View>
      </FastImage>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
    width: 375,
    height: 375,
  },
  contentContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
  },
  icon: {
    color: colors.white,
    fontSize: 20,
    paddingRight: 20,
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
  image: {
    borderRadius: 6,
    backgroundColor: colors.lightGrey,
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default SystemCell
