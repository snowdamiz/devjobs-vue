<template>
  <nav>
    <div class="inner">
      <input type="input" placeholder="Filter by title..."/>
      <div class="buttonsContainer">
        <button class="button filterButton">
          <img src="@/assets/mobile/icon-filter.svg" />
        </button>
        <button class="button searchButton">
          <img src="@/assets/mobile/icon-search.svg" />
        </button>
      </div>
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
    display: flex;
    justify-content: center;

    .inner {
      width: calc(100% - $navPadding * 2);
      border-radius: $borderRadius;
      background-color: $white;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;

      @media only screen and (min-width: $desktop) {
        width: 1100px;
      }

      input {
        height: 48px;
        font-size: 16px;
        font-family: $primaryFont;
        color: $searchBarGray;
        border: none;
        padding-left: 8px;
        min-width: 100px;
      }

      .buttonsContainer {
        display: flex;
        justify-content: space-between;

        .button {
          width: 48px;
          height: 48px;
          border-radius: $borderRadius;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
  
          img {
            width: 20px;
            height: 20px;
          }
        }
  
        .searchButton {
          background: $violet;
        }
  
        .filterButton {
          margin-right: 10px;
          background: none;
        }
      }
    }
  }
</style>