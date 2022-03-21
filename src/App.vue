<template>
  <main>
    <AppHeader />
    <router-view />
  </main>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'

  export default {
    components: {
      AppHeader,
    },
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap');

  main {
    font-family: $primaryFont;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: $lightGray;
  }
</style>
 