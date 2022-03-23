import axios from 'axios'
const URL = 'http://localhost:3000/api/jobs'

const state = {
  jobs: [],
  selectedJob: {},
  filterState: false,
  fulltimeFilter: false,
  search: {
    position: '',
    location: '',
  }
}

// brings state into components
const getters = {
  allJobs: state => state.jobs,
  selectedJob: state => id => state.jobs.find(job => job.id === id),
  filterState: state => state.filterState,
  fulltimeFilter: state => state.fulltimeFilter,
  search: state => state.search,
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
  toggleFilter: (state) => (state.filterState = !state.filterState),
  toggleFulltimeFilter: (state) => (state.fulltimeFilter = !state.fulltimeFilter),
  setSearchPosition: (state, position) => (state.search.position = position),
  setSearchLocation: (state, location) => (state.search.location = location),
}

export default {
  state,
  getters,
  actions,
  mutations
}