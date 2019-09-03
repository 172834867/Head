import axios from 'axios'
// import {AxiosAdapter} from 'axios/index'
const instance = axios.create({
    baseURL:'http://127.0.0.1:7001',
    timeout:1000
})
// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response:any) =>{
    // Do something with response data
    return response.data;
  },  (error) =>{
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;