<template lang="pug">
  main
    BackButton(to="/")
    h1 Saves
    .all-saves 
      .preset(
        v-for="(save, index) in saves" v-bind:key="save.frequency"
        tabindex="0"
        @click="loadSave(index)"
      )
        .frequency {{ save.frequency }}
        .wave-type {{ save.waveType }}
</template>

<script>
import BackButton from '@/components/BackButton.vue';
export default {
  components: {
    BackButton,
  },
  computed: {
    saves() {
      return this.$store.state.saves
    }
  },
  methods: {
    loadSave(index) {
      // set the store to the frequency and wave type
      console.log("Loading save ", index);
      const save = this.saves[index];
      this.$store.commit('loadSave', save);

      // push to main route
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>
.preset {
  padding: var(--main-padding);
  border: var(--gray-border);
  border-radius: var(--border-radius);
  background-color: var(--gray-background-color);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover, &:focus {
    border: var(--selected-border);
    background-color: var(--selected-background-color);
    outline: none;
  }

  .frequency {
    font-weight: bold;
  }

  & + & {
    margin-top: var(--main-padding);
  }
}
</style>