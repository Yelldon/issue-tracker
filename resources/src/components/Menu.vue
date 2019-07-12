<template>
  <!-- <nav class="fixed flex shadow w-full h-12 p-3"> -->
  <nav v-if="showMenu" class="fixed flex items-center shadow-lg bg-white w-full p-3 z-50">
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
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      const $this = this
      axios.delete('/authentication')
      .then((response) => {
        window.localStorage.removeItem('accessToken')
        $this.$router.push({ name: 'Login' })
      })

    }
  }
}
</script>
