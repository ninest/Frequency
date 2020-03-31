import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// global CSS
import('../node_modules/normalize.css')

import('./assets/styles/main.scss')
import('./assets/styles/variables.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
