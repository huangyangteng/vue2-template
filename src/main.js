// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
//引入api.config.js文件，然后设置axios的baseURL  改为
// import apiConfig from './apis/api.config'
// axios.defaults.baseURL=apiConfig.baseUrl

// // 1.测试axios是否成功引入
// axios.get('https://api.github.com/users?since=10')
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))

// // 2.1 测试跨域接口
// axios.get('http://118.24.85.97:22222/api')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// // 2.1 测试跨域接口
// axios.get('/apis/api')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// 2.1 测试不添加/apis的跨域接口
// axios.get('/api')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
