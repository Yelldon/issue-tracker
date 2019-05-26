<template>
  <!-- <nav class="fixed flex shadow w-full h-12 p-3"> -->
  <nav class="fixed flex items-center shadow w-full p-3">
    <div class="w-1/2">
      <div class="flex justify-start text-lg font-bold">
        Issue Tracker
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-end">
        <p class="mr-4">Logged in as: {{ user }}</p>
        <a href="#" @click.prevent="logout">
          Logout
        </a>
      </div>
    </div>
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
