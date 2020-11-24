import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import RNText from './RNText';
import colors from '../../config/colors';

const windowWidth = Dimensions.get('window').width;
const Paragraph = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.title}>{title}</RNText>
      <RNText style={styles.content}>{content}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginTop: windowWidth * 0.05,
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
});

export default Paragraph;
