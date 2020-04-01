import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frequency: 3000,
    maxFrequency: 30000,
    minFrequency: 0,
    play: false,
    waveType: 'sine',

    oscillator: null,
    audioContext: null,
  },
  mutations: {
    setFrequency(state, value) {
      console.log("Setting frequency");
      state.frequency = value;
      state.oscillator.frequency.value = value;
    },

    playPause(state) {
      state.play = !state.play;

      if (state.play == true) {
        console.log("Playing audio");
        state.oscillator.frequency.value = state.frequency;
        state.oscillator.start(0);
      } else {
        console.log("Stopping audio");
        state.oscillator.stop();

        // reiniti audio t
        this.commit('initAudio');
      }
    },

    increaseFrequency(state) {
      console.log(state.frequency)
      if (state.frequency < state.maxFrequency - 100)
        // state.frequency = state.frequency + 100;
        this.commit('setFrequency', state.frequency + 100)
    },

    decreaseFrequency(state) {
      if (state.frequency > state.minFrequency + 100)
        // state.frequency = state.frequency - 100;
        this.commit('setFrequency', state.frequency - 100)
    },

    selectWaveType(state, value) {
      console.log("Changed wave type");
      state.waveType = value;
      state.oscillator.type = value;
    },

    initAudio(state) {
      console.log("Initialized audio")
      state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      state.oscillator = state.audioContext.createOscillator();
      state.oscillator.connect(state.audioContext.destination);
    },

    save(state) {
      console.log("Saving")
    }
  },
  actions: {
  },
  modules: {
  }
})
