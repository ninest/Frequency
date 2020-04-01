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
@import '@/assets/styles/button.scss';
.button {
  display: flex-end;
  @include button;

  text-align: center;
}
</style>