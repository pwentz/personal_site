import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import mutations from './store/mutations'
import state from './store/state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(App)
})
