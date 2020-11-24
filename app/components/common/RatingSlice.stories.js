import { storiesOf } from '@storybook/react-native'
import React from 'react'
import RatingSlice from './RatingSlice'

storiesOf('Rating Slice', module)
  .add('with title', () => <RatingSlice title={'Vertical Deflection'} />)
  .add('with title and values', () => (
    <RatingSlice
      title="Vertical Deflection"
      redValue="6mm"
      amberValue="3mm - 6mm"
      greenValue="< 3mm"
    />
  ))
  .add('with values', () => (
    <RatingSlice redValue="6mm" amberValue="3mm - 6mm" greenValue="< 3mm" />
  ))
