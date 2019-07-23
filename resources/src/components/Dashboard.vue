<template>
  <div class="create">
    <div class="flex">
      <h1 class="heading mr-6">Dashboard</h1>
      <button class="b-blue justify-end" @click="createIssue">
        Create Issue
      </button>
    </div>
    <div class="divider bg-gray-500 mt-3 mb-6"></div>
    <h2 class="mb-6">Newest Issues</h2>
    <div class="flex flex-col w-1/2 mt-6">
      <div v-for="issue in issues" :key="'issue-' + issue.id">
        <Issue :issue="issue" />
      </div>
    </div>
    <div class="create-issue fixed w-5/6 p-10 bg-white shadow z-50" :class="{ active: issueActive }">
      <router-view />
    </div>
    <transition name="fade">
      <div v-show="issueActive" @click="closeIssue" class="overlay"></div>
    </transition>
  </div>
</template>

<script>
import Issue from './issue/View'

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
    this.$root.$on('closeCreate', () => {
      this.issueActive = false
      this.$router.push({ name: 'Dashboard' })
    })
    this.$root.$on('editIssue', (id) => {
      this.editIssue(id)
    })

    this.$socket.on('issues newIssue', (data) => {
      console.log(this.$store.state.userId)
      console.log(data)
      let css = ''
      if (this.$store.state.userId === data.userId) {
        css = 'yours'
      } else {
        css = 'others'
      }
      this.$toasted.global.newIssue({
        message: data.message,
        class: css
      })
    })
  },
  destroyed () {
    this.$socket.off('issues newIssue')
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
    },
    editIssue (id) {
      this.issueActive = true
      this.$router.push({ name: 'DashboardEdit', params: { id } })
    },
    closeIssue () {
      this.issueActive = false
      this.$router.push({ name: 'Dashboard' })
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.name === 'DashboardCreate') {
        vm.createIssue()
      }
      // if (to.name === 'DashboardEdit') {
      //   // vm.editIssue()
      // }
    })
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
  opacity: 0;
  transition: all 0.3s cubic-bezier(.48,.4,.45,.98)
}

.active {
  right: 0;
  opacity: 1;
}

.divider {
  height: 1px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
