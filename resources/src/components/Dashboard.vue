<template>
  <div class="create">
    <h1>Dashboard</h1>
    <CreateIssue />
    <div v-for="issue in issues" :key="'issue-' + issue.id">
      <Issue :issue="issue" />
    </div>
  </div>
</template>

<script>
import CreateIssue from './CreateIssue'
import Issue from './Issue'

export default {
  name: 'Dashboard',
  components: {
    CreateIssue,
    Issue
  },
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
    this.getIssues()
  },
  methods: {
    getIssues () {
      let $this = this
      axios.get('/issues', {
        params: {
          sort: -1,
          // $skip: 10
        }
      })
      .then(function (response) {
        console.log(response.data);
        $this.issues = response.data.data
      })
      // axios.get('/issue').then(function (response) {
      //   console.log(response.data);
      //   $this.issues = response.data.data
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
