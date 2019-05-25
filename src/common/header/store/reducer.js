import * as constants from "./constants";
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  pageIndex: 0,
  totalPage: 1,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.ACTION_SEARCH_Blur:
      return state.set('focused', false)
    case constants.ACTION_POPUL_HOTITEMS:
      // return state.set('list', action.list)
      return state.merge({
        list: action.list,
        totalPage: Math.ceil(action.list.size / 10),
      })
    case constants.ACTION_MOUSEIN:
      return state.set('mouseIn', action.enter)
    case constants.ACTION_SWITCHLIST:
      return state.set('pageIndex', action.pageIndex)
    default:
      return state;
  }
}