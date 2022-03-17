<template>
  <nav>
    <div class="inner">

    </div>
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
    width: 100%;
    height: 80px;
    margin-top: -40px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    /* margin: -40px $navPadding 0 $navPadding; */


    .inner {
      width: calc(100% - $navPadding * 2);
      border-radius: $borderRadius;
      background-color: $white;
      height: 100%;

      @media only screen and (min-width: $desktop) {
        width: 1100px;
        /* align-self: center; */
      }
    }
  }
</style>