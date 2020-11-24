import { AppRegistry } from 'react-native'

import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { name as appName } from '../app.json'
import { loadStories } from './storyLoader'

import './rn-addons'

addDecorator(withKnobs)

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({})

AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
