<template>
 <div class="login text-center">
    <h1>Login</h1>
    <input type="text" v-model="form.username" />
    <input type="textarea" v-model="form.password"/>
    <button @click="login">
      Login
    </button>
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
      }
    }
  },
  mounted () {

  },
  methods: {
    login () {
      let $this = this
      axios.post('/authentication', this.$data.form)
      .then(function (response) {
        window.localStorage.setItem('accessToken', response.data.accessToken);
        $this.$router.push({ name: 'Dashboard' })
      })
      .catch(function (error) {
        console.log('Could not authenticate user', error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
