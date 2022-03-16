<template>
  <header>
    <div class="logo">
      <h1>devjobs</h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
  }
</script>

<style lang="scss">
  @import '@/styles/_variables.scss';

  header {
    width: 100%;
    height: 136px;
    background-image: url('@/assets/mobile/bg-pattern-header.svg');
    background-size: cover;

    @media only screen and (min-width: $tablet) and (max-width: $desktop) {
      height: 160px;
      background-image: url('@/assets/desktop/bg-pattern-header.svg');
    }

    @media only screen and (min-width: $desktop) {
      height: 162px;
      background-image: url('@/assets/desktop/bg-pattern-header.svg');
      display: flex;
      justify-content: center;
    }

    .logo {
      height: 100%;

      @media only screen and (min-width: $desktop) {
        width: 1110px;
      }

      h1 {
        margin: 0;
        font-family: $primaryFont;
        color: $white;
        font-size: 36px;
        padding: 25px 0 0 20px;

        @media only screen and (min-width: $tablet) and (max-width: $desktop) {
          padding: 40px 0 0 50px;
          font-weight: 600;
        }

        @media only screen and (min-width: $desktop) {
          padding: 40px 0 0 0;
        }
      }
    }
  }
</style>