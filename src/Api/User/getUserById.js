import axios from "axios"

export const getUserInfoById = (id) =>{
  return axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-user-by-id/${id}`)
}
