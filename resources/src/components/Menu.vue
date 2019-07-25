<template>
  <nav v-if="showMenu" class="main-menu fixed flex items-center shadow-lg bg-white w-full p-3 z-50">
    <div class="w-1/2">
      <div class="flex justify-start text-lg font-bold">
        Issue Tracker
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-end">
        <div class="controls pr-4">
          <button class="b-blue justify-end" @click="createIssue">
            Create Issue
          </button>
        </div>
        <div class="flex items-center" @click="loadMenu">
          <div class="settings-link">
            <div class="menu-image bg-gray-600">
              {{ userLetter }}
            </div>
            <span>
              {{ user }}
            </span>
          </div>
          <div v-show="subMenu" class="sub-menu flex flex-col absolute p-6 bg-white shadow-lg z-40 mr-3">
            <router-link :to="{ name: 'Dashboard' }">
              Dashboard
            </router-link>
            <router-link :to="{ name: 'user' }">
              Settings
            </router-link>
            <a href="#" @click.prevent="logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      subMenu: false
    }
  },
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    },
    user () {
      return this.$store.state.user
    },
    userLetter () {
      return this.user.charAt(0)
    },
  },
  methods: {
    createIssue () {
      this.$root.$emit('createIssue')
    },
    loadMenu () {
      if (this.subMenu) {
        this.subMenu = false
      } else {
        this.subMenu = true
      }
    },
    setUserImage (user) {
      let firstLetter = user.charAt(0)

      return firstLetter
    },
    logout () {
      const $this = this
      axios.delete('/authentication')
      .then((response) => {
        window.localStorage.removeItem('accessToken')
        $this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>

<style scoped>
.main-menu {
  max-height: 55px;
}
.menu-image {
  display: inline-block;
  color: white;
  border-radius: 16px;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  margin-right: 3px;
}
.settings-link {
  cursor: pointer;
}
.sub-menu {
  top: 100%;
  right: 0;
}
</style>
