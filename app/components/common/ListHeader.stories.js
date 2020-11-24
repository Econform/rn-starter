import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import React from 'react'
import ListHeader from './ListHeader'
const imageUrl =
  'https://images.unsplash.com/photo-1531925470851-1b5896b67dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
storiesOf('List Header', module)
  .add('with image', () => <ListHeader images={imageUrl} />)
  .add('with image and onPress', () => (
    <ListHeader images={imageUrl} onPress={action('clicked-item')} />
  ))
