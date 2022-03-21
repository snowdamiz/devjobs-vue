<template>
  <main>
    <AppHeader />
    <AppNav />
    <!-- <h1>{{ jobs[0].id }}</h1> -->
    <router-view />
  </main>
</template>

<script>
  import Axios from 'axios'
  import AppHeader from '@/components/AppHeader.vue'
  import AppNav from '@/components/AppNav.vue'

  export default {
    components: {
      AppHeader,
      AppNav,
    },
    data() {
      return {
        jobs: []
      }
    },
    methods: {
      async getJobs() {
        try {
          const res = await Axios.get('./data.json')
          if (res.status === 200) this.jobs = res.data
          else console.error('Error fetching jobs')
        } catch (err) { console.error(err) }
      },
    },
    created() {
      this.getJobs()
    },
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600&display=swap');

  main {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: $lightGray;
  }
</style>
 