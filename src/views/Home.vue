<template lang="pug">
  main
    .top
    .bottom
      Selector
      Display
      Slider
      Buttons
</template>

<script>
import Display from '@/components/Display.vue';
import Selector from '@/components/Selector.vue';
import Slider from '@/components/Slider.vue';
import Buttons from '@/components/Buttons.vue';
export default {
  components: {
    Display,
    Selector,
    Slider,
    Buttons
  },
  mounted() {
    this.$store.commit('initAudio')
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: 1fr auto;

  height: 100vh;

  // .top { background: red }
  // .bottom { background: green }

  .bottom {
    & * + * {
      margin-top: var(--main-padding);
    }
  }


  padding-bottom: calc( 7*var(--main-padding));
}
</style>
