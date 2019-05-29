import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    showMenu: false
  },
  mutations: {
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
