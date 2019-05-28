import axios from "axios";
import { constants } from ".";

const changeLogin = () => ({
  type: constants.ACTION_CHANGE_LOGIN,
  value: true,
})
export const logout = () => ({
  type: constants.ACTION_LOGOUT,
  value: false,
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      if (res.data.data) {
        dispatch(changeLogin())
      }
    }).catch(err => {
      alert('登录失败')
    })
  }
}