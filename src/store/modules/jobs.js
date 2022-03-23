import axios from 'axios'
const URL = 'http://localhost:3000/api/jobs'

const state = {
  jobs: [],
  selectedJob: {},
  filterState: true,
}

// brings state into components
const getters = {
  allJobs: state => state.jobs,
  filterState: state => state.filterState,
} 

const actions = {
  async getAllJobs({ commit }) {
    try {
      const res = await axios.get(URL)
      if (res.status === 200) commit('setAllJobs', res.data) 
      else console.log(['Error fetching jobs', res])
    } catch (err) { console.log(err) }
  }
}

// adding to state
const mutations= {
  setAllJobs: (state, jobs) => (state.jobs = jobs),
  toggleFilter: (state) => (state.filterState = !state.filterState)
}

export default {
  state,
  getters,
  actions,
  mutations
}