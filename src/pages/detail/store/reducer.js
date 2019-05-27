import { fromJS } from 'immutable'
import { constants } from '.';

const defaultState = fromJS({
  data: {
    title: '',
    content: '',
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_POPULATE_DETAIL:
      return state.set('data', action.data)
    default:
      return state;
  }
}