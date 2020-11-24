import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import React from 'react'
import SystemCell from './SystemCell'
const imageUrl =
  'https://images.unsplash.com/photo-1531925470851-1b5896b67dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
const iconName = 'hammer-outline'

storiesOf('System Cell', module)
  .add('with image', () => <SystemCell imageUrl={imageUrl} />)
  .add('with image and title', () => (
    <SystemCell imageUrl={imageUrl} title={'Pallet Racking'} />
  ))
  .add('with image, title and icon', () => (
    <SystemCell
      iconName={iconName}
      imageUrl={imageUrl}
      title={'Pallet Racking'}
    />
  ))
  .add('with title', () => <SystemCell title={'Pallet Racking'} />)
  .add('with icon, image, title and onPress', () => (
    <SystemCell
      iconName={iconName}
      imageUrl={imageUrl}
      title={'Pallet Racking'}
      onPress={action('clicked-item')}
    />
  ))
