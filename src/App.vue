<template>
  <main>
    <AppHeader />
    <AppNav />
  </main>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppNav from './components/AppNav.vue'

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppNav,
    }
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600&display=swap');

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    /* align-items: center; */
    background-color: $lightGray;
  }
</style>
 