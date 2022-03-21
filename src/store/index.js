import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedJob: {},
    allJobs: []
  },
  mutations: {

  },
  actions: {
    async getAllJobs(state) {
      const response = await fetch('@/data.json')
      const data = await response.json()
      state.commit('getAllJobs', data)
    }
  },
  modules: {},
  getters: {
    getAllJobs: state => state.allJobs
  }
})