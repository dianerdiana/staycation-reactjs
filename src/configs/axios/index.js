import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_URL_HOST}/api/v1/member`
})

export default instance
