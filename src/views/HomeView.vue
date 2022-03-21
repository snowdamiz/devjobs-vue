<template>
  <div class="jobs-container">
    <div v-for="(job, i) in jobs" v-bind:key="i" class="job-card">

    </div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: "HomeView",
    data() {
      return {
        jobs: [],
        // filterView: false,
      }
    },
    methods: {
      async getJobs() {
        try {
          const res = await Axios.get('./data.json')
          if (res.status === 200) this.jobs = res.data
          else console.log(['Error fetching jobs', res])
        } catch (err) { console.log(err) }
      },
      setFilterView(bool) {
        this.filterView = bool
      },
    },
    created() {
      this.getJobs()
    },
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';

  .jobs-container {
    /* border: 1px solid red; */
    width: calc(100% - $navPadding * 2);
    margin-top: 40px;

    .job-card {
      background-color: $white;
      margin-top: 5px;
      border-radius: $borderRadius;
      padding: 15px;
    }
  }
</style>
 