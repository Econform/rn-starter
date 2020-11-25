import { configure } from '@storybook/react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import racking from './reducers/racking'

const configureStore = createStore(racking, applyMiddleware(thunk))

export default configureStore
