<template>
  <div class="create">
    <h1>Create Issue</h1>
    <input type="text" v-model="form.title" />
    <input type="textarea" v-model="form.text"/>
    <button @click="add">
      Submit
    </button>
    <div v-for="(issue, index) in issues" :key="index">
      <p>{{ issue }}</p>
      <p>{{ issue.title }}</p>
      <p>{{ issue.text }}</p>
      <p>------------</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateIssue',
  data () {
    return {
      issues: [],
      form: {
        title: null,
        text: null
      }
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    add () {
      let $this = this
      axios.post('/issue', this.$data.form)
      .then(function (response) {
        console.log(response);
        $this.form.title = null
        $this.form.text = null
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    get () {
      let $this = this
      axios.get('/issue')
      .then(function (response) {
        console.log(response);
        $this.issues = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
