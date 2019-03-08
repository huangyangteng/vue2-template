<template>
  <div id="app">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <br>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

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
