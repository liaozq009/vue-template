import axios from 'axios'
import storage from 'store'

import { ACCESS_TOKEN } from '@/store/mutation-types'

// 异常拦截处理器
const errorHandler = (error) => {
  console.log('错误');
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    const token = storage.get(ACCESS_TOKEN)
    if (error.response.status === 404) {
      console.log('请求路径不存在！');
    } else if (error.response.status === 403) {
      console.log('Forbidden');
    } else {
      console.log(data.error);
    }
    
  }
  return Promise.reject(error)
}

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// request interceptor
request.interceptors.request.use(config => {
  // 获取token
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    // config.headers['Access-Token'] = token
    config.headers['clientId'] = token
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request