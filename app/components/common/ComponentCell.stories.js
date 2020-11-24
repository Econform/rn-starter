import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ComponentCell from './ComponentCell';

storiesOf('Component Cell', module)
  .add('with title', () => <ComponentCell title={'Front'} />)
  .add('with title and subtitle', () => (
    <ComponentCell title={'Front'} subTitle={'As looking at the racking'} />
  ));
