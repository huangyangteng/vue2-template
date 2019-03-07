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
      meta:{requireAuth:true},
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
  let token=localStorage.getItem('token');

  if(to.matched.some(item=>item.meta.requireAuth) && !token){
     //对于需要权限的页面，如果不存在token,则跳转到登录页
    alert('请先登录')
    next({
      path:'/login',
    })
  }else{
    next();
  }

})
export default router
