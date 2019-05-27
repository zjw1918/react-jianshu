import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      topic: '核电站',
      imgUrl: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
    },
    {
      id: 2,
      topic: 'Python',
      imgUrl: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
    },
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}