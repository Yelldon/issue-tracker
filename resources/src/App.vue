<template>
  <div id="app">
    <CreateIssue />
  </div>
</template>

<script>
import CreateIssue from './components/CreateIssue.vue'

export default {
  name: 'app',
  components: {
    CreateIssue
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
