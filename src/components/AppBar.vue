<template lang="pug">
  .app-bar
    h1 Frequency
    div
      button(@click="$router.push('saves')") presets
      button(@click="$store.commit('save')") save
</template>

<style lang="scss" scoped>
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>