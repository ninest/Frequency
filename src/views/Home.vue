<template lang="pug">
  main
    .top
    .bottom
      Slider
</template>

<script>
import Slider from '@/components/Slider.vue';
export default {
  components: {
    Slider
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: 8fr 6fr;

  height: 100vh;

  // .top { background: red }
  // .bottom { background: green }
}
</style>
