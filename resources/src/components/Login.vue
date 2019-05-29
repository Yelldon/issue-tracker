<template>
 <div class="login text-center">
    <div class="w-1/3 p-8 mx-auto shadow-lg rounded bg-white">
    <h1 class="text-3xl font-bold">Issue Tracker</h1>
      <form class="mt-8" @submit.prevent="login">
        <input type="text" class="mb-6 focus:outline-none focus:shadow-outline" placeholder="Username" v-model="form.username" />
        <input type="password" class="mb-6 focus:outline-none focus:shadow-outline" placeholder="Password" v-model="form.password"/>
        <div class="flex">
          <button class="b-blue">
            Login
          </button>
        </div>
      </form>
    </div>
    <p class="mt-8 text-red-600" v-if="error">{{ errorMessage }}</p>
  </div>

</template>

<script>
export default {
  name: 'CreateIssue',
  data () {
    return {
      form: {
        strategy: 'local',
        username: null,
        password: null
      },
      error: false,
      errorMessage: 'There was an error logging in'
    }
  },
  mounted () {

  },
  methods: {
    login () {
      let $this = this
      this.error = false
      axios.post('/authentication', this.$data.form)
      .then(function (response) {
        window.localStorage.setItem('accessToken', response.data.accessToken);
        $this.$router.push({ name: 'Dashboard' })
      })
      .catch(function (error) {
        $this.error = true
        $this.form.password = null
        console.log('Could not authenticate user', error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
