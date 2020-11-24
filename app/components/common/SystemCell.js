import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import RNText from './RNText'
import colors from '../../config/colors'

const SystemCell = ({ imageUrl, icon, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      activeOpacity={onPress ? 0.2 : 1}
      style={styles.container}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 6 }}
        source={imageUrl}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <RNText style={styles.title}>{title}</RNText>
        </View>
      </ImageBackground>
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
    backgroundColor: colors.blue,
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default SystemCell
