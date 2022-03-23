<template>
  <div class="content">
    <AppNav />
    <div class="jobs-container">
      <button v-for="job in allJobs" v-bind:key="job.id" class="job-card">
        <div class="job-logo" v-bind:style="{backgroundColor: job.logoBackground}" >
          <img 
            :src="job.logo"
            alt="job logo" 
          />
        </div>
        <div class="job-card-labels">
          <span class="job-card-label-text">{{ job.postedAt }}</span>
          <span class="divider">.</span>
          <span class="job-card-label-text">{{ job.contract }}</span>
        </div>
        <h1>{{ job.position }}</h1>
        <h3>{{ job.company }}</h3>
        <h4>{{ job.location }}</h4>
      </button>
    </div>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "HomeView",
    components: {
      AppNav,
    },
    methods: {
      ...mapActions([
        'getAllJobs',
      ]),
    },
    computed: mapGetters(['allJobs']),
    created() {
      this.getAllJobs()
    }
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';

  .content {
    width: calc(100% - $navPadding * 2);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media only screen and (min-width: $desktop) {
      width: 1100px;
    }

    .jobs-container {
      width: 100%;
      margin-bottom: 40px;

      @media only screen and (min-width: $tablet) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      @media only screen and (min-width: $desktop) {
        grid-template-columns: 1fr 1fr 1fr;
      }
  
      .job-card {
        background-color: $white;
        margin-top: 55px;
        border-radius: $borderRadius;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        width: 100%;
  
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
          padding-top: 20px;
  
          .job-card-label-text {
            color: $darkGray;
          }

          .divider {
            font-size: 30px;
            line-height: 3px;
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
          margin-top: 0;
        }
  
        h4 {
          color: $violet;
          font-size: 14px;
          margin-top: 50px;
          margin-top: 25px;
        }
      }
    }
  }

</style>
 