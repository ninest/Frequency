
<template lang="pug">
  div
    .display
      input(type="number" v-model="storeFrequency")
    input(type="range" min="0" max="30000" v-model="storeFrequency")

    .buttons
      div
        button <<
      div
        button.play-pause &#9658; 
      //- &#9724; 
      div
        button >>

</template>

<script>
export default {
  computed: {
    storeFrequency: {
      get() {
        return this.$store.state.frequency;
      },
      set(value) {
        this.$store.commit('setFrequency', value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;

  .display {
    input {
      width: 100%;
      text-align: center;
      font-size: 4em;
      font-weight: 900;

      border: none;
      outline: none;

      // hide spinners
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    margin-bottom: var(--extra-padding);
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;

    width: 100%;
    height: 0.7em;
    background: #ddd;
    outline: none;
    transition: 0.2s;

    border-radius: 0.2em;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;

      width: 2.3em;
      height: 1.3em;
      border-radius: 0.2em;
      background: var(--accent-color);
      cursor: pointer;
    }

    &:hover {
    }
  }

  .buttons {
    margin-top: var(--extra-padding);

    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;

      button {
        height: 3em;
        width: 3em;
        border-radius: 50%;

        &.play-pause {
          padding-left: 11px;
        }
      }
    }
  }
}
</style>
