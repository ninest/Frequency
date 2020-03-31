import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frequency: 15000,
    maxFrequency: 30000,
    minFrequency: 0,
    play: false,
    waveType: 'sine',
  },
  mutations: {
    setFrequency(state, value) {
      state.frequency = value;
    },

    playPause(state) {
      state.play = !state.play;

      if (state.play == true) {
        
      }
    },

    increaseFrequency(state) {
      console.log(state.frequency)
      if (state.frequency < state.maxFrequency - 100)
        state.frequency = state.frequency + 100;
    },

    decreaseFrequency(state) {
      if (state.frequency > state.minFrequency + 100)
      state.frequency = state.frequency - 100;
    },

    selectWaveType(state, value) {
      this.state.waveType = value;;
    }
  },
  actions: {
  },
  modules: {
  }
})
