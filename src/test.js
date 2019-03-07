import {Button,Table,Message} from 'iview'

const components={Button,Table,Message}

const install = function(Vue, opts = {}){
  Object.keys(components).forEach(key=>{
    Vue.component(key,components[key])
  })
}

export default install
