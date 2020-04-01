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
      border-radius: var(--border-radius);

      font-size: 0.8em;

      background-color: var(--gray-background-color);
      border: var(--gray-border);

      outline: none;

      transition: 0.2s;

      &.play-pause {
        padding-left: 11px;
        font-size: 1em;
        background-color: rgba(0, 0, 0, 0.100);
      }

      &:hover, &:focus {
        background-color: var(--selected-background-color);
        border: var(--selected-border);
      }
    }
  }
}
</style>