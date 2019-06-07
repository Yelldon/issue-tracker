<template>
  <div class="create">
    <h2 v-if="edit">Edit Issue</h2>
    <h2 v-else>Create New Issue</h2>
    <div v-if="edit">
      <p v-if="issue.user">Created By: {{ issue.user.firstname + ' ' + issue.user.lastname}}</p>
      <p>Added: {{ formatDateTime(issue.createdAt) }}</p>
      <p>Last Updated: {{ formatDateTime(issue.createdAt) }}</p>
    </div>
    <form class="mt-8" @submit.prevent="checkIssue">
      <input type="text" class="border mb-6" v-model="form.title" />
      <input type="textarea" rows="6" class="border mb-6" v-model="form.text"/>
      <button class="b-green">
        <span v-if="edit"> Save Issue</span>
        <span v-else>Create Issue</span>
      </button>
      <a href="#" class="pl-3" @click.prevent="cancel">
      Cancel
    </a>
    </form>
  </div>
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'CreateIssue',
  mixins: [
    mixins
  ],
  props: [
    'id'
  ],
  data () {
    return {
      issue: null,
      form: {
        title: null,
        text: null
      },
      edit: false
    }
  },
  mounted () {
    if (this.id) {
      this.edit = true
      this.getIssue()
    }
  },
  methods: {
    checkIssue () {
      if (this.edit) {
        this.editIssue()
      } else {
        this.addIssue()
      }
    },
    addIssue () {
      let $this = this
      axios.post('/issues', this.$data.form)
      .then(function (response) {
        $this.form.title = null
        $this.form.text = null
        $this.$root.$emit('getIssues')
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getIssue () {
      let $this = this
      axios.get('/issues/' + this.id)
      .then(response => {
        let data = response.data
        console.log(response);
        $this.issue = response.data
        $this.form.title = data.title
        $this.form.text = data.text
      })
      .catch(error => {
        console.log(error);
      });
    },
    editIssue () {
      let $this = this
      axios.put('/issues/' + this.id, this.$data.form)
      .then(function (response) {
        $this.$root.$emit('getIssues')
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    cancel () {
      this.$root.$emit('closeCreate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
