<template>
  <div>
    <h2>登录</h2>
    用户名<input type="text" v-model="user">
    密码<input type="password" v-model="pass">
    <input type="button" @click="reg" value="注册">
    <input type="button" @click="login" value="登录">
    <input type="button" @click="logout" value="注销">
  </div>
</template>
<script>
  import {LOGIN,REG} from '../../apis/auth.js'
export default {
  data() {
    return {
      user:'',
      pass:'',
      err:[]
    }
  },
  methods: {
    async reg(){
      try {
        const data = await REG({ name: this.user,pass: this.pass })
        console.log(data)
        alert(JSON.stringify(data))
        this.cleanForm()


      } catch (error) {
        console.log(error)
      }

    },
    async login(){
      // 如果登录成功,保存token
      try {
        const data = await LOGIN({ name: this.user,pass: this.pass })
        console.log(data)
        localStorage.setItem('token',data.token)
        console.log(localStorage.getItem('token'))
        // alert(JSON.stringify(data))
        this.cleanForm()
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    cleanForm(){
      this.user=''
      this.pass=''
    },
    logout(){
      localStorage.removeItem('token')
    }
  },


}
</script>
