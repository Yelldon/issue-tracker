import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    user: null,
    showMenu: false
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setUser (state, name) {
      state.user = name
    },
    setMenu (state, menu) {
      state.showMenu = menu
    }
  },
  actions: {

  }
})
