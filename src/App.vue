<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// import {JOKE} from './apis/auth.js'
export default {
  name: 'App',
  // async mounted() {
  //   let data=await JOKE({ key:'0a910595de1af40b2cf7ee6291faca7c'})
  //   console.log(data)
  // },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
