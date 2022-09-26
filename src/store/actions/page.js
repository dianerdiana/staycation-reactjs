import { FETCH_PAGE } from '../types'
import axios from 'axios'

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}${url}`)
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data
        }
      })
      return response.data
    })
}
