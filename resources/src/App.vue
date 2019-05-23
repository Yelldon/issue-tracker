<template>
  <div id="app">
    <a href="#" @click.prevent="logout">
      Logout
    </a>
    <!-- <create-issue /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import CreateIssue from './components/CreateIssue'
export default {
  name: 'App',
  // components: {
  //   CreateIssue
  // },
  data () {
    return {}
  },
  methods: {
    logout () {
      window.localStorage.removeItem('accessToken')
      this.$router.push({ name: 'Login' })
    }
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
