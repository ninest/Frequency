<template lang="pug">
  main
    BackButton(to="/")
    h1 Saves
    .all-saves()
      .preset(
        v-for="(save, index) in saves" v-bind:key="save.frequency"
        tabindex="0"
        @click="loadSave(index)"
      )
        .frequency {{ save.frequency }}
        .wave-type {{ save.waveType }}
    
    div(v-if="noSaves") There are no saves/presets yet!
    .menu(v-else)
      button(@click="deleteAll()").danger Delete all
</template>

<script>
import BackButton from '@/components/BackButton.vue';
export default {
  metaInfo: {
    title: 'Saves',
  },
  components: {
    BackButton,
  },
  computed: {
    saves() {
      return this.$store.state.saves
    },
    noSaves() {
      return this.saves.length == 0
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
    },

    deleteAll() {
      this.$store.commit('deleteAll');
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/button.scss';
.preset {
  @include button;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .frequency {
    font-weight: bold;
  }

  & + & {
    margin-top: var(--main-padding);
  }
}
.menu {
  margin-top: var(--extra-padding);
  button {
    @include button;
  }
}
</style>