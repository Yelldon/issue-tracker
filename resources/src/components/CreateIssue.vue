<template>
  <div class="create">
    <h2>Create Issue</h2>
    <input type="text" class="border" v-model="form.title" />
    <input type="textarea" class="border" v-model="form.text"/>
    <button @click="add">
      Submit
    </button>
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

  },
  methods: {
    addIssue () {
      let $this = this
      axios.post('/issues', this.$data.form)
      .then(function (response) {
        console.log(response);
        $this.form.title = null
        $this.form.text = null
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
