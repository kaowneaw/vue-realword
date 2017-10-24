<template>
  <div id="app">
    <NavBarMenu/>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavBarMenu from './components/NavBarMenu'

  export default {
    components: {
      NavBarMenu
    },
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
