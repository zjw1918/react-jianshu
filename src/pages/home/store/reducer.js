import { fromJS } from 'immutable'
import { constants } from '.';

const defaultState = fromJS({
  topicList: [],
  list: [],
  page: 0,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_POPULATE_TOPIC_LIST:
      return state.set('topicList', fromJS(action.list))
    case constants.ACTION_POPULATE_LIST:
      return state.set('list', fromJS(action.list))
    case constants.ACTION_POPULATE_MORE_LIST:
      return state.merge({
        list: state.get('list').concat(fromJS(action.list)),
        page: action.page
      })
    default:
      return state;
  }
}