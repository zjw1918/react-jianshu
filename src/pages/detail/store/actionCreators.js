import axios from "axios";
import { fromJS } from "immutable";
import { constants } from ".";

const populateDetail = (data) => ({
  type: constants.ACTION_POPULATE_DETAIL,
  data: fromJS(data)
})

export const fetchDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
    .then(res => dispatch(populateDetail(res.data.data)))
  }
}