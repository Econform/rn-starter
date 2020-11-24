import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import RNText from './RNText'
import colors from '../../config/colors'
import Icon from 'react-native-vector-icons/Ionicons'

const windowWidth = Dimensions.get('window').width;
const chevronIcon = (
  <Icon name="chevron-forward-outline" size={windowWidth * 0.05} color={colors.white} />
);

const ComponentCell = ({ title, subTitle, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        accessible={true}
        style={styles.touchableContainer}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#6A6A6A',
    marginLeft: windowWidth * 0.05,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: windowWidth * 0.03,
    paddingBottom: windowWidth * 0.03,
  },
  titleContainer: {
    flex: 0.9,
    flexDirection: 'column',
    width: '100%',
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: windowWidth * 0.05,
  },
  icon: {
    color: colors.white,
    fontSize: 20,
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ComponentCell;
