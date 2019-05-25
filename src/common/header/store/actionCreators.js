import * as constants from "./constants";
import axios from 'axios'
import { fromJS } from "immutable";

const populateHotItems = (list) => ({
  type: constants.ACTION_POPUL_HOTITEMS,
  list: fromJS(list),
})

export const searchFocus = () => ({
  type: constants.ACTION_SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type: constants.ACTION_SEARCH_Blur,
})

export const getHotItems = () => {
  return (dispatch) => {
    axios.get('/api/header.json')
    .then(res => {
      if (res.data.success) {
        dispatch(populateHotItems(res.data.data))  
      }
    })
    .catch(err => console.error(err))
  }
}

export const mouseIn = (enter) => ({
  type: constants.ACTION_MOUSEIN,
  enter
})

export const switchList = (pageIndex) => ({
  type: constants.ACTION_SWITCHLIST,
  pageIndex
})


