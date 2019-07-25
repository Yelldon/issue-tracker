<template>
  <div class="dashboard" ref="dashboard">
    <div class="flex">
      <h1 class="heading mr-6">Dashboard</h1>
    </div>
    <div class="divider bg-gray-500 mt-3 mb-6"></div>
    <div class="flex flex-row w-full mt-6">
      <div class="test flex-col w-1/3 mt-6">
        <div v-for="issue in issues" :key="'issue-' + issue.id" class="mr-2">
          <Issue :issue="issue" />
        </div>
      </div>
    </div>
    <div class="create-issue fixed p-10 bg-white shadow z-40 w-11/12 md:w-5/6" :class="{ active: issueActive }">
      <router-view />
    </div>
    <transition name="fade">
      <div v-show="issueActive" @click="closeIssue" class="overlay"></div>
    </transition>
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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
      this.closeIssue()
    })
    this.$root.$on('closeCreate', () => {
      this.closeIssue()
    })
    this.$root.$on('createIssue', () => {
      this.createIssue()
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
      this.disableScroll()
      this.$router.push({ name: 'DashboardCreate' })
    },
    editIssue (id) {
      this.issueActive = true
      this.disableScroll()
      if (id) {
        this.$router.push({ name: 'DashboardEdit', params: { id } })
      }
    },
    closeIssue () {
      this.issueActive = false
      clearAllBodyScrollLocks()
      this.$router.push({ name: 'Dashboard' })
    },
    disableScroll () {
      disableBodyScroll(document.querySelector('app'))
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.name === 'DashboardCreate') {
        vm.createIssue()
      }
      if (to.name === 'DashboardEdit') {
        vm.editIssue()
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-issue {
  top: 0;
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
.test {
  flex: 1 0 20%
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
