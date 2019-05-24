import * as constants from "./constants";
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
})

export default (state = defaultState, action) => {  
  if (action.type === constants.ACTION_INPUT_FOCUSED) {
    return state.set('focused', action.focused)
  }
  return state
}