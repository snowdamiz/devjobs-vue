<template>
    <nav>
      <div class="inputs">
        <div class="searchContainer">
          <img src="@/assets/desktop/icon-search.svg" />
          <input type="input" placeholder="Filter by title..."/>
        </div>
        <div class="locationFilterContainer">
          <img src="@/assets/desktop/icon-location.svg" />
          <input type="input" placeholder="Filter by location..."/>
        </div>
      </div>
      <div class="buttonsContainer">
        <button class="button filterButton">
          <img src="@/assets/mobile/icon-filter.svg" />
          <div class="fullTimeFilterContainer">
            <div class="radioButton">
            </div>
            <label>Full Time</label>
          </div>
        </button>
        <button class="button searchButton">
          <img src="@/assets/mobile/icon-search.svg" />
          <label>Search</label>
        </button>
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
    width: calc(100% - $navPadding * 2);
    border-radius: $borderRadius;
    background-color: $white;
    height: 80px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
      width: 100%;
      outline: none;
    }

    .inputs {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      .searchContainer {
        display: flex;
        align-items: center;
        gap: 6px;
        border-right: 1px solid $shadow;
        height: 100%;
        width: 100%;
        margin-left: 10px;

        @media only screen and (min-width: $tablet) {
          width: 50%;
          margin: 0;
        }

        img {
          width: 20px;
          height: 20px;
          padding-left: 18px;
          display: none;

          @media only screen and (min-width: $tablet) {
            display: block;
          }
        }
      }

      .locationFilterContainer {
        border-right: 1px solid $shadow;
        align-items: center;
        height: 100%;
        display: none;

        @media only screen and (min-width: $tablet) {
          width: 50%;
          display: flex;
        }

        img {
          width: 16px;
          height: 20px;
          padding-left: 18px;
          padding-right: 8px;
        }
      }
    }

    .buttonsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 12px;
      margin-right: 16px;

      @media only screen and (min-width: $tablet) {
        min-width: 250px;
        margin: 0;
      }

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

          @media only screen and (min-width: $tablet) {
            display: none;
          }
        }
      }

      .searchButton {
        background: $violet;

        @media only screen and (min-width: $tablet) {
          width: auto;
          padding: 0 18px;
        }

        label {
          font-family: $primaryFont;
          color: $white;
          font-weight: 600;
          display: none;

          @media only screen and (min-width: $tablet) {
            display: block;
          }
        }
      }

      .filterButton {
        background: none;

        @media only screen and (min-width: $tablet) {
          width: auto;
          /* display: none; */
        }

        .fullTimeFilterContainer {
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          display: none;

          @media only screen and (min-width: $tablet) {
            display: flex;
          }

          .radioButton {
            width: 24px;
            height: 24px;
            border-radius: $smallBorderRadius;
            background-color: $shadow;
          }

          label {
            font-family: $primaryFont;
            font-weight: 600;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>