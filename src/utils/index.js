import UTIL from './utils.js'

const UtilPlugin={}


UtilPlugin.install=function(Vue,options){
  Vue.prototype.$utils=UTIL
}
export default UtilPlugin
