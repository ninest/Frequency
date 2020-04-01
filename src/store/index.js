import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    saves: state.saves
  })
})

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

    saves: []
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
      console.log("Saving");

      const newSave = {
        frequency: state.frequency,
        waveType: state.waveType,
      };

      // TODO fix

      // make sure not already in in state.saves
      if (!state.saves.includes(newSave)) {
        state.saves.push(newSave)
      } else {
        console.log("Already there")
      }
    },

    loadSave(state, save) {
      console.log("Loading save");
      console.log(save.frequency, save.waveType)
      state.frequency = save.frequency;
      state.waveType = save.waveType;
    },

    deleteAll(state) {
      state.saves = [];
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
