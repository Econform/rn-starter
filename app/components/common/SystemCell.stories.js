import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import React from 'react'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../config/colors'
import SystemCell from './SystemCell'
const image = '../../assets/images/pallet-racking.png'
const icon = (
  <Icon name="hammer-outline" size={scale(20)} color={colors.white} />
)

storiesOf('System Cell', module)
  .add('with image', () => <SystemCell imageUrl={require(image)} />)
  .add('with image and title', () => (
    <SystemCell
      icon={icon}
      imageUrl={require(image)}
      title={'Pallet Racking'}
    />
  ))
  .add('with image, title and no icon', () => (
    <SystemCell imageUrl={require(image)} title={'Pallet Racking'} />
  ))
  .add('without image', () => <SystemCell title={'Pallet Racking'} />)
  .add('with onPress', () => (
    <SystemCell
      icon={icon}
      imageUrl={require(image)}
      title={'Pallet Racking'}
      onPress={action('clicked-item')}
    />
  ))
