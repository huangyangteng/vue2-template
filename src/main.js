// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iview on demand
import './assets/styles/base.less'
import iviewComs from './components/iview-coms'
Vue.use(iviewComs)

// polyfill
import 'babel-polyfill'
import './polyfill/polyfill'

// utils
import Util from './utils/index'
Vue.use(Util)


// tip in browser’s console
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    // console.log(this.$utils.pick({a:1,b:2},['a']))
  },
})
