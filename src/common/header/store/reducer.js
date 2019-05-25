import * as constants from "./constants";
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_SEARCH_FOCUS:
      return state.set('focused', true)  
    case constants.ACTION_SEARCH_Blur:
      return state.set('focused', false)  
    case constants.ACTION_POPUL_HOTITEMS:
      return state.set('list', action.list)  
    default:
      return state;
  }
}