import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import colors from 'app/config/colors'

const ListHeader = ({ images, onPress }) => {
  const imageUrl = images && images.isArray ? images[0].image : images
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      activeOpacity={onPress ? 0.2 : 1}
      style={styles.container}
    >
      <FastImage source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
    backgroundColor: colors.lightGrey,
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default ListHeader
