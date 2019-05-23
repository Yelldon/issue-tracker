<template>
  <div id="app" class="container mx-auto">
    <Menu />
    <div class="container mx-auto">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>


<style>
/* #app { */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* } */
</style>
