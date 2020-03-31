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

  background-color: rgba(0, 0, 0, 0.060);
  border: 1px solid rgba(0, 0, 0, 0.090);


  &.selected {
    background-color: rgba(var(--accent-color-rgb), 0.10);
    border: 2px solid rgba(var(--accent-color-rgb), 0.090);
  }
}
</style>