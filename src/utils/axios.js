import axios from "axios"
import { isProd } from "../config"

const serverClient = () => {
  const API_KEY = process.env.REACT_TMDB_API || 'c0fa6bc64ad08cbe344d1ce681a62d69'
  const axiosInstance = axios.create({
    baseURL: !isProd() ? 'https://api.themoviedb.org/3' : '/api'
  })

  axiosInstance.interceptors.request.use((requestConfig) => {
    if(!isProd()){
      requestConfig.params = {
        api_key: API_KEY
      }
    }
    return requestConfig
  }, (error) => {
    console.log('ErrReq: ', error)
    return Promise.reject(error)
  })

  axiosInstance.interceptors.response.use((response) => {
    return response.data
  }, (err) =>{
    let errorData = {}
      switch (err.response.status) {
        case 401:
          errorData = {
            msg: err.response.data.status_message,
            status: 401
          }
          break;
        case 404:
          errorData = {
            msg: err.response.data.status_message,
            status: 404
          }
          break;
        default:
          errorData = {
            msg: 'Something Went wrong!!!',
            status: 500
          }
          break;
      }
      return Promise.reject(errorData.msg || 'Something Went wrong!!!')
  })

  return axiosInstance
}

export {
  serverClient,
}