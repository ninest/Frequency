<template lang="pug">
  .buttons
    div
      button(@click="decreaseFrequency()") <<
    div
      button.play-pause(@click="playPause()")
        span(v-if="!playing") &#9658; 
        span(v-else) &#9724; 
    div
      button(@click="increaseFrequency()") >>
</template>

<script>
  export default {
    computed: {
      playing() {
        return this.$store.state.play
      }
    },
    methods: {
      playPause() {
        this.$store.commit('playPause');
      },
      increaseFrequency() {
        this.$store.commit('increaseFrequency');
      },
      decreaseFrequency() {
        this.$store.commit('decreaseFrequency');
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/button.scss';

.buttons {
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      height: 3em;
      width: 6em;

      font-size: 0.8em;

      @include button;
      padding: unset;

      &.play-pause {
        padding-left: 9px;
        font-size: 1em;

        // this should look more dominant
        background-color: rgba(var(--accent-color-rgb), 0.33);
        border: var(--selected-border);
      }
    }
  }
}
</style>