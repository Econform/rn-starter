import { storiesOf } from '@storybook/react-native'
import React from 'react'
import DetailSlice from './DetailSlice'

storiesOf('Detail Slice', module)
  .add('with title', () => <DetailSlice title="What is it?" />)
  .add('with title and content', () => (
    <DetailSlice
      title="What is it?"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor integer netus ultricies sed. Nec lectus adipiscing nibh libero faucibus nam. Orci neque sem venenatis euismod magna facilisis. Vel euismod eget sagittis, dolor mi, faucibus pretium nulla a."
    />
  ))
