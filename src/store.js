import Vue from 'vue'
import Vuex from 'vuex'
import { Me } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getCurrentUser: () => {
      Me.get((data) => {
        this.profile = data
      })
    }
  }
})
