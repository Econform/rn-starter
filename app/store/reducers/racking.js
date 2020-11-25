import { FETCH_RACKING } from '../actions/action-types'

const initialState = {
  rackingData: [],
}

const rackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RACKING:
      return {
        ...state,
        rackingData: action.payload,
      }
    default:
      return state
  }
}

export default rackingReducer
