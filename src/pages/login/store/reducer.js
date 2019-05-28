import { constants } from '.';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_CHANGE_LOGIN:
      return state.set('isLogin', action.value)
    case constants.ACTION_LOGOUT:
      return state.set('isLogin', action.value)
    default:
      return state;
  }
}