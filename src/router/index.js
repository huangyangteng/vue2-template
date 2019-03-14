import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Home from '@/views/Home/Home.vue'
import Login from '@/views/Login/Login.vue'
import Test from '@/views/Test/Test.vue'
// 懒加载方式
// const Home=()=>import('@/views/Home/Home.vue')
// const Login=()=>import('@/views/Login/Login.vue')
// const Test=()=>import('@/views/Test/Test.vue')

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
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
router.beforeEach((to,from,next)=>{//增加登录验证
  const isLogin=localStorage.getItem('token')?true:false;
  if(to.path=='/login'){//如果是登录页面，不需要token
    next();
  }else{//如果不是登录页面就要判断是否登录
    isLogin?next():next('/login');
  }

})
export default router
