import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ListItem from './ListItem'

storiesOf('Component Cell', module)
  .add('with title', () => <ListItem title={'Front'} />)
  .add('with title and subtitle', () => (
    <ListItem title={'Front'} subTitle={'As looking at the racking'} />
  ))
