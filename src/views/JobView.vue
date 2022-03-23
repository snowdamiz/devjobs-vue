<template>
  <div class="content">
    <h1>{{ job.position }}</h1>
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
  }

</style>
 