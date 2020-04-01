<template lang="pug">
  #app
    //- h1 Main
    div
      router-view
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Frequency',
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

main {
  padding: calc(var(--main-padding)) 5%;

  @include not-mobile-screen {
    padding: calc(var(--main-padding)) 30%;
  }
}
</style>
