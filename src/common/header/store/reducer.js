import * as constants from "./constants";

const defaultState = {
  focused: false,
}

export default (state = defaultState, action) => {
  if (action.type === constants.ACTION_INPUT_FOCUSED) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = action.focused
    return newState
  }
  return state
}