<template>
  <div class="content">
    <AppNav />
    <div class="jobs-container">
      <div v-for="(job, i) in jobs" v-bind:key="i" class="job-card">
        <div class="job-logo" v-bind:style="{backgroundColor: job.logoBackground}" >
          <img 
            :src="job.logo"
            alt="job logo" 
          />
        </div>
        <div class="job-card-labels">
          <span class="job-card-label-text">{{ job.postedAt }}</span>
          <span class="job-card-label-text">{{ job.contract }}</span>
        </div>
        <h1>{{ job.position }}</h1>
        <h3>{{ job.company }}</h3>
        <h4>{{ job.location }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import AppNav from '@/components/AppNav.vue'

  export default {
    name: "HomeView",
    components: {
      AppNav,
    },
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

  .content {
    width: calc(100% - $navPadding * 2);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .jobs-container {
      width: 100%;
      margin-bottom: 40px;
  
      .job-card {
        background-color: $white;
        margin-top: 55px;
        border-radius: $borderRadius;
        padding: 15px 30px;
  
        .job-logo {
          width: 50px;
          height: 50px;
          border-radius: $largeBorderRadius;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -40px;
        }
  
  
        .job-card-labels {
          display: flex;
          gap: 10px;
          padding-top: 15px;
  
          .job-card-label-text {
            color: $darkGray;
          }
        }
  
        h1 {
          font-size: 22px;
          font-weight: 700;
        }
  
        h3 {
          font-weight: 300;
          color: $darkGray;
          font-size: 16px;
          line-height: 12px;
        }
  
        h4 {
          color: $violet;
          font-size: 14px;
          margin-top: 50px;
        }
      }
    }
  }

</style>
 