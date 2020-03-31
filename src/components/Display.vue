<template lang="pug">
  .display
    input(type="number" v-model="storeFrequency")
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
  }
</script>

<style lang="scss" scoped>
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
}
</style>