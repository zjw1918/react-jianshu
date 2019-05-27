import { fromJS } from 'immutable'
import { constants } from '.';

const defaultState = fromJS({
  topicList: [],
  list: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_POPULATE_TOPIC_LIST:
      return state.set('topicList', action.list)
    case constants.ACTION_POPULATE_LIST:
      return state.set('list', action.list)
    default:
      return state;
  }
}