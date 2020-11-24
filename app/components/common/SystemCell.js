import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native'
import RNText from './RNText'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width

const SystemCell = ({ imageUrl, icon, title, onPress }) => {
  const image = { uri: imageUrl };

  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      style={styles.container}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 6 }}
        source={image}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <View style={styles.icon}>{icon}</View>
          <RNText style={styles.title}>{title}</RNText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    paddingTop: windowWidth * 0.05,
    paddingRight: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.05,
  },
  contentContainer: {
    flex: 1,
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
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default SystemCell;
