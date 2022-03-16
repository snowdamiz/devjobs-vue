<template>
  <nav>
    
  </nav>
</template>

<script>
  export default {
    name: 'AppNav',
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';
  
  nav {
    width: calc(100% - $navPadding * 2);
    height: 60px;
    margin: -30px $navPadding 0 $navPadding;
    border-radius: $borderRadius;
    background-color: $white;
  }
</style>