//auth.js 用于定义用户的登录、注册、注销等

import req from './http.js'

//定义接口

//在这里定义了一个登陆的接口，把登陆的接口暴露出去给组件使用
export const LOGIN =params=>req('post','/api/users/login.do',params)
//这里使用了箭头函数，转换一下写法：
// export const LOGIN=function(params){
//   return req('post','/api/login',params)
// }

//定义注册接口
export const REG =params=>req('post','/api/users/reg',params)

