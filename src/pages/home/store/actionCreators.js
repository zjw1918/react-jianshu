import axios from "axios";
import { constants } from ".";
import { fromJS } from "immutable";

const populateTopicList = (list) => ({
  type: constants.ACTION_POPULATE_TOPIC_LIST,
  list: fromJS(list)
})

const populateList = (list) => ({
  type: constants.ACTION_POPULATE_LIST,
  list: fromJS(list)
})

export const fetchTopicList = () => {
  return (dispatch) => {
    axios.get('/api/topiclist.json')
      .then(res => dispatch(populateTopicList(res.data.data)))
  }
}

export const fetchList = () => {
  return (dispatch) => {
    axios.get('/api/list.json')
      .then(res => dispatch(populateList(res.data.data)))
  }
}

