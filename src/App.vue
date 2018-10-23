<template>
  <div id="app">
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from './components/goTop'

export default {
  name: 'App',
  components: {
    goTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 10000px;
  background-color: #2c3e50
}
</style>
