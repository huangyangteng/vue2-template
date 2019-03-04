// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//引入api.config.js文件，然后设置axios的baseURL
import apiConfig from './apis/api.config'
axios.defaults.baseURL=apiConfig.baseUrl

// // 1.测试axios是否成功引入
// axios.get('https://api.github.com/users?since=10')
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))

// 2.1 测试跨域接口
// axios.get('http://v.juhe.cn/joke/randJoke.php',{
//   params:{
//     key:'0d0b3e02fa5a07b2e82fdf76305c98f0'
//   }
// })
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


// 2.2 测试跨域接口
// axios.get('/apis/joke/randJoke.php',{
//   params:{
//     key:'0d0b3e02fa5a07b2e82fdf76305c98f0'
//   }
// })
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


// 2.3 测试不加/apis跨域接口
axios.get('/joke/randJoke.php',{
  params:{
    key:'0d0b3e02fa5a07b2e82fdf76305c98f0'
  }
})
.then(res=>console.log(res))
.catch(err=>console.log(err))



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
