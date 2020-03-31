
<template lang="pug">
  div
    input(type="range" :min="$store.state.minFrequency" :max="$store.state.maxFrequency" v-model="storeFrequency")

</template>

<script>
export default {
  computed: {
    storeFrequency: {
      get() {
        return this.$store.state.frequency;
      },
      set(value) {
        this.$store.commit('setFrequency', parseInt(value));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;

    width: 100%;
    height: 0.7em;
    background: #ddd;
    outline: none;

    border-radius: var(--border-radius);

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;

      width: 2.3em;
      height: 1.3em;
      border-radius: var(--border-radius);
      background: rgba(var(--accent-color-rgb), 0.5);
      border: 2px solid rgba(var(--accent-color-rgb));
      // border: 1px solid var(--accent-color);
      cursor: pointer;

      transition: 0.2s;
    }


    &:hover {
      &::-webkit-slider-thumb {
        border: 5px solid rgba(var(--accent-color-rgb));
      }
    }
  }

  
}
</style>
