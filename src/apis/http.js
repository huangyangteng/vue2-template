import axios from 'axios'
import apiConfig from './api.config'
//创建axios的一个实例
var instance = axios.create({
    baseURL:apiConfig.baseUrl,
    timeout: 6000
})
// 测试instance好不好使
// instance.get('/api')
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))

//------------------- 一、请求拦截器
instance.interceptors.request.use(function (config) {
    // 给头添加token
    if (localStorage.getItem('token')){//存在token,加入头
        config.headers.authorization=localStorage.getItem('token')
    }
    return config;
}, function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
});

//----------------- 二、响应拦截器
instance.interceptors.response.use(function (response) {
    if(response.data.code=='2000'){//成功响应，更新token
      if(response.data.token){
        localStorage.setItem('token',response.data.token)
      }
    }else{
      //对错误进行处理 根据状态码，抛出错误
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method == 'post') {
        return instance.post(url, data)
    } else if (method == 'get') {
        return instance.get(url, { params: data })
    } else if (method == 'delete') {
        return instance.delete(url, { params: data })
    }else if(method == 'put'){
        return instance.put(url,data)
    }else{
        console.error('未知的method'+method)
        return false
    }
}
