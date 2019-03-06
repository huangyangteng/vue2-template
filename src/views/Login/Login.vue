<template>
  <div>
    <h2>登录</h2>
    用户名<input type="text" v-model="user">
    密码<input type="password" v-model="pass">
    <input type="button" @click="login" value="登录">
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:'',
      pass:'',
      err:[]
    }
  },
  methods: {
    login(){
      // 如果登录成功,保存token
      if(this.user=='ming' && this.pass=='123'){}

    }
  },

}
</script>
