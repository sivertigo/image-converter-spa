import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    count: 0

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
