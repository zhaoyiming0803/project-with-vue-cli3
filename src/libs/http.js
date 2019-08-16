/**
* 基于 axios 封装 HTTP 请求
* @author zhaoyiming
* @since  2019/08/16
*/

import axios from 'axios';

axios.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  config.headers['Token'] = 'zhaoyiming';
  return config;
});


axios.interceptors.response.use(response => {
  return response.data;
}, response => {
  // ... handle error message
});

// axios.defaults.withCredentials = true;

export default axios;
