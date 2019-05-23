<template>
  <nav>
    Logged in as: {{ user }}
    <a href="#" @click.prevent="logout">
      Logout
    </a>
  </nav>
</template>

<script>
// import CreateIssue from './components/CreateIssue'
export default {
  name: 'App',
  // components: {
  //   CreateIssue
  // },
  data () {
    return {
      user: ''
    }
  },
  methods: {
    logout () {
      window.localStorage.removeItem('accessToken')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
