<template>
  <div class="content">
    <div class="header">
      <div class="header-content">
        <div 
          class="logo"
          v-bind:style="{backgroundColor: job.logoBackground}"
        >
          <img :src="`../${job.logo}`" />
        </div>
        <div class="header-text">
          <h2>{{ job.company }}</h2>
          <label>{{ job.website }}</label>
        </div>
      </div>
      <button>
        Company Site
      </button>
    </div>
    <div class="job-container">
      <div class="job-heading">
        <div class="job-heading-left">
          <div class="job-heading-top">
            <label class="job-label-text">{{ job.postedAt }}</label>
            <span class="divider">.</span>
            <label class="job-label-text">{{ job.contract }}</label>
          </div>
          <h1>{{ job.position }}</h1>
          <h4>{{ job.location }}</h4>
        </div>
        <button>Apply Now</button>
      </div>
      <div class="job-content">
        <p>{{ job.description }}</p>
        <div class="job-content-heading">
          <h5>Requirements</h5>
          <p>{{ job.requirements.content }}</p>
          <ul>
            <li v-for="(item, i) in job.requirements.items" :key="i">{{ item }}</li>
          </ul>
        </div>
        <div class="job-content-heading">
          <h5>What you will do</h5>
          <p>{{ job.role.content }}</p>
          <ol>
            <li v-for="(item, i) in job.role.items" :key="i">{{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="job-footer">
      <div class="job-footer-inner">
        <div class="job-footer-content">
          <h6>{{ job.position }}</h6>
          <label>{{ job.company }}</label>
        </div>
        <button>Apply</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobView",
    computed: {
      job() {
        return this.$store.getters.selectedJob(parseInt(this.$route.params.id))
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/_variables.scss';

  .content {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media only screen and (min-width: $desktop) {
      width: 1100px;
    }

    .header {
      width: calc(100% - $navPadding * 2);
      border-radius: $borderRadius;
      background-color: $white;
      margin-top: -20px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      @media only screen and (min-width: $tablet) {
        margin-top: -40px;
        flex-flow: row nowrap;
        justify-content: space-between;
      }

      .logo {
        width: 50px;
        height: 50px;
        border-radius: $largeBorderRadius;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -25px;

        @media only screen and (min-width: $tablet) {
          border-radius: 0;
          margin: 0;
          height: 140px;
          width: 140px;
          border-top-left-radius: $borderRadius;
          border-bottom-left-radius: $borderRadius;

          img {
            width: 60%;
          }
        }
      }

      .header-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        @media only screen and (min-width: $tablet) {
          justify-content: space-between;
          gap: 10px;
          flex-flow: row nowrap;
        }

        .header-text {
          margin-left: 40px;

          h2 {
            font-size: 20px;
  
            @media only screen and (min-width: $tablet) {
              margin: 0;
            }
          }
  
          label {
            color: $gray;
          }
        }

      }

      button {
        margin: 30px 0;
        padding: 15px 25px;
        border-radius: $borderRadius;
        border: none;
        background-color: $veryLightViolet;
        cursor: pointer;
        color: $violet;
        font-weight: 700;

        @media only screen and (min-width: $tablet) {
          justify-self: flex-end;
          margin-right: 40px;
        }
      }
    }

    .job-container {
      width: calc(100% - $navPadding * 2);
      border-radius: $borderRadius;
      background-color: $white;
      margin-top: 20px;
      padding: 0;

      .job-heading {
        margin: 30px;
        display: flex;
        flex-flow: column nowrap;

        @media only screen and (min-width: $tablet) {
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
        }

        .job-heading-left {
          display: flex;
          flex-flow: column nowrap;
          
          .job-heading-top {
            display: flex;
            align-items: center;
            gap: 8px;
          
            .job-label-text {
              color: $darkGray;
            }
  
            .divider {
              margin-top: -18px;
              font-size: 30px;
              line-height: 0px;
              color: $darkGray;
            }
          }
  
          h1 {
            font-size: 20px;
          }
  
          h4 {
            font-size: 16px;
            color: $violet;
            padding: 0;
            margin: 0;
          }
  
          button {
            font-size: 18px;
            font-weight: 700;
            padding: 16px 25px;
            margin: 35px 0 10px 0;
            border: none;
            border-radius: $borderRadius;
            color: $white;
            background-color: $violet;
            cursor: pointer;

            @media only screen and (min-width: $tablet) {
              margin: 0;
            }
          }
        }

        .job-heading-top {
          display: flex;
          align-items: center;
          gap: 8px;
        
          .job-label-text {
            color: $darkGray;
          }

          .divider {
            margin-top: -18px;
            font-size: 30px;
            line-height: 0px;
            color: $darkGray;
          }
        }

        h1 {
          font-size: 20px;
        }

        h4 {
          font-size: 16px;
          color: $violet;
          padding: 0;
          margin: 0;
        }

        button {
          font-size: 18px;
          font-weight: 700;
          padding: 16px 25px;
          margin: 35px 0 10px 0;;
          border: none;
          border-radius: $borderRadius;
          color: $white;
          background-color: $violet;
          cursor: pointer;
        }
      }

      .job-content {
        margin: 30px;
        p {
          font-size: 16px;
          color: $darkGray;
          line-height: 26px;
        }
  
        h5 {
          font-size: 20px;
          margin: 0;
        }
  
        .job-content-heading {
          margin: 30px 0 0 0;
          display: flex;
          flex-flow: column nowrap;
  
          ul, ol {
  
            li {
              font-size: 16px;
              color: $darkGray;
              line-height: 26px;
              margin: 0;
            }
          }
        }
      }
    }

    .job-footer {
      width: 100vw;
      background-color: $white;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .job-footer-inner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: $tablet) {
          /* width: 1100px; */
          /* border: 1px solid red; */
          justify-content: space-between;
        }

        @media only screen and (min-width: $desktop) {
          width: 1100px;
        }

        .job-footer-content {
          display: none;
  
          @media only screen and (min-width: $tablet) {
            display: flex;
            flex-flow: column nowrap;
            /* align-items: center; */
            justify-content: center;
            margin-left: 50px;
          }
  
          h6{
            font-size: 20px;
            margin: 0;
            /* color: $darkGray; */
          }
  
          label {
  
          }
        }
  
        button {
          width: calc(100% - $navPadding * 2);
          margin: 26px 0;
          padding: 18px;
          border: none;
          border-radius: $borderRadius;
          background-color: $violet;
          color: $white;
          font-weight: 700;
          cursor: pointer;
  
          @media only screen and (min-width: $tablet) {
            width: auto;
            padding: 18px 30px;
            margin-right: 50px;
          }
        }
      }
    }
  }

</style>
 