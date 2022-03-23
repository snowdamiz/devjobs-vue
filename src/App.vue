<template>
  <main>
    <div v-if="this.filterState" class="filter-overlay">
      <div class="filter-overlay-container">
        <div class="section top">
          <img src="@/assets/desktop/icon-location.svg" alt="location filter image" />
          <input placeholder="Filter by location..." />
        </div>
        <div class="section bottom">
          <div class="fullTimeFilterContainer">
            <div class="radioButton">
            </div>
            <label>Full Time</label>
          </div>
          <button @click="toggleFilter()" >Search</button>
        </div>
      </div>
    </div>
    <AppHeader />
    <router-view />
  </main>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import AppHeader from '@/components/AppHeader.vue'

  export default {
    components: {
      AppHeader,
    },
    computed: mapGetters(['filterState']),
    methods: {
      ...mapMutations([
        'toggleFilter',
      ]),
    }
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

    .filter-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;

      .filter-overlay-container {
        width: calc(100% - $navPadding * 2);
        border-radius: $borderRadius;
        background-color: $white;

        .section {
          padding: 25px;
          display: flex;
          justify-self: flex-start;
          align-items: center;
        }

        .top {
          border-bottom: 1px solid $shadow;

          img {
            border: none;
          }

          input {
            max-width: 100%;
            border: none;
            padding-left: 20px;
            outline: none;
          }
        }

        .bottom {
          flex-flow: column nowrap;
          align-items: flex-start;
          gap: 25px;

          .fullTimeFilterContainer {
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            display: flex;

            .radioButton {
              width: 24px;
              height: 24px;
              border-radius: $smallBorderRadius;
              background-color: $shadow;
            }

            label {
              font-weight: 600;
              font-size: 16px;
            }
          }

          button {
            width: 100%;
            padding: 15px;
            border-radius: $borderRadius;
            border: none;
            background-color: $violet;
            color: $white;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
 