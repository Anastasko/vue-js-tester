<template>
  <div id="app">
    <li v-for="c in components">
      <router-link :to="c.path">
        <span>{{c.name}}</span>
      </router-link>
    </li>
    <router-view/>
  </div>
</template>

<script>
  import components from './router/routes'

  export default {
    name: 'app',
    data () {
      return {
        components: components
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
