<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LightBox :images="images"></LightBox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LightBox from 'vue-image-lightbox'

export default {
  name: 'app',
  components: {
    HelloWorld,
    LightBox,
       
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
  margin-top: 60px;
}
</style>
