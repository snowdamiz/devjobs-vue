<template>
  <main>
    <AppHeader />
  </main>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600&display=swap');

  main {
    height: 100vh;
  }
</style>
 