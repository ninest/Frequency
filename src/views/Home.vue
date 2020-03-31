<template lang="pug">
  main
    .top
    .bottom
      Slider
      Buttons
</template>

<script>
import Slider from '@/components/Slider.vue';
import Buttons from '@/components/Buttons.vue';
export default {
  components: {
    Slider,
    Buttons
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: 1fr auto;

  height: 100vh;

  // .top { background: red }
  // .bottom { background: green }

}
</style>
