<template lang="pug">
  .grid
    SelectableWaveType(waveType="sine")
    SelectableWaveType(waveType="sqare")
    SelectableWaveType(waveType="sawtooth")
    SelectableWaveType(waveType="triangle")
</template>

<script>
import SelectableWaveType from '@/components/SelectableWaveType.vue';
export default {
  components: {
    SelectableWaveType
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--main-padding);


}
</style>