<template>
  <div class="create">
    <h1>Dashboard</h1>
    <button class="b-blue" @click="createIssue">
      Create Issue
    </button>
    <div v-for="issue in issues" :key="'issue-' + issue.id">
      <Issue :issue="issue" />
    </div>
    <div class="create-issue fixed w-5/6 p-10 bg-white shadow z-50" :class="{ active: issueActive }">
      <router-view />
    </div>
    <div v-show="issueActive" class="overlay"></div>
  </div>
</template>

<script>
import Issue from './Issue'

export default {
  name: 'Dashboard',
  components: {
    Issue
  },
  data () {
    return {
      issues: [],
      form: {
        title: null,
        text: null
      },
      issueActive: false
    }
  },
  mounted () {
    this.getIssues()
    this.$root.$on('getIssues', () => {
      this.getIssues()
      this.issueActive = false
      this.$router.push({ name: 'Dashboard' })
    })
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
        $this.issues = response.data.data
      })
    },
    createIssue () {
      this.issueActive = true
      this.$router.push({ name: 'DashboardCreate' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-issue {
  /* top: calc() */
  top: 51px;
  right: -100%;
  height: 100vh;
  transition: all 0.2s ease-in-out
}

.active {
  right: 0;
}

</style>
