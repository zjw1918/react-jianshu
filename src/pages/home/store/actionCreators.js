import axios from "axios";
import { constants } from ".";

const populateTopicList = (list) => ({
  type: constants.ACTION_POPULATE_TOPIC_LIST,
  list
})

const populateList = (list) => ({
  type: constants.ACTION_POPULATE_LIST,
  list
})

const populateMoreList = (list, page) => ({
  type: constants.ACTION_POPULATE_MORE_LIST,
  list,
  page,
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

export const loadMore = (page) => {
  return (dispatch) => {
    axios.get('/api/list.json?page=' + page)
      .then(res => dispatch(populateMoreList(res.data.data, page + 1)))
  }
}


