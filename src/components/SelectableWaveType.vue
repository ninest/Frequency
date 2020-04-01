<template lang="pug">
  <div>
    div(
      tabindex="0" @click="select()"
      v-bind:class="{ selected : selected }"
    ).button
      .name {{ waveType }}
  </div>
</template>

<script>
  export default {
    props: ["waveType"],
    methods: {
      select() {
        this.$store.commit('selectWaveType', this.waveType)
      }
    },
    computed: {
      selected() {
        return this.$store.state.waveType == this.waveType
      }
    },
  }
</script>

<style lang="scss" scoped>
.button {
  padding: var(--main-padding);
  border-radius: var(--border-radius);

  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;

  background-color: var(--gray-background-color);
  border: var(--gray-border);


  &.selected {
    background-color: var(--selected-background-color);
    border: var(--selected-border);
  }

  &:focus {
    outline: none;
  }
}
</style>