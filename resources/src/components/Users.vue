<template>
  <div class="create">
    <h2>Create New Issue</h2>
    <form class="mt-8" @submit.prevent="runSubmit">
      <input type="text" class="border mb-6" placeholder="Username" v-model="form.username" />
      <input type="password" class="border mb-6" placeholder="Password" v-model="form.password"/>
      <input type="text" class="border mb-6" placeholder="First Name" v-model="form.firstname" />
      <input type="text" class="border mb-6" placeholder="Last Name" v-model="form.lastname" />
      <input type="email" class="border mb-6" placeholder="Email" v-model="form.email" />
      <button class="b-green">
        Create New User
      </button>
      <a href="#" class="pl-3" @click.prevent="cancel">
      Cancel
    </a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateIssue',
  data () {
    return {
      issues: [],
      form: {
        username: null,
        password: null,
        firstname: null,
        lastname: null,
        email: null
      }
    }
  },
  mounted () {

  },
  methods: {
    runSubmit () {
      let $this = this
      axios.post('/users', this.$data.form)
      .then(function (response) {
        console.log(response);
        $this.form.username = null
        $this.form.password = null
        $this.form.firstname = null
        $this.form.lastname = null
        $this.form.email = null
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    cancel () {
      // this.$root.$emit('closeCreate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
