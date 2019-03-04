import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home/Home.vue'
// import Login from '@/views/Login/Login.vue'
// import Test from '@/views/Test/Test.vue'
// 懒加载方式
const Home=()=>import('@/views/Home/Home.vue')
const Login=()=>import('@/views/Login/Login.vue')
const Test=()=>import('@/views/Test/Test.vue')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    }
  ]
})
