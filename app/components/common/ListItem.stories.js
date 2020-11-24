import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import React from 'react'
import ListItem from './ListItem'

storiesOf('List Item', module)
  .add('with title', () => <ListItem title={'Front'} />)
  .add('with title and subtitle', () => (
    <ListItem title={'Front'} subTitle={'As looking at the racking'} />
  ))
  .add('with title, subtitle and onPress', () => (
    <ListItem
      title={'Front'}
      subTitle={'As looking at the racking'}
      onPress={action('clicked-item')}
    />
  ))
