import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frequency: 15000,
    play: false,
  },
  mutations: {
    setFrequency(state, value) {
      state.frequency = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
