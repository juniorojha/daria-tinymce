/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import Vue from 'vue'
import Vuex from 'vuex'

// Import vuex modules
import spellcheckerStore from './modules/spellchecker/spellchecker-store'

// Import root vuex store
import * as actions from './root/actions'
import * as mutations from './root/mutations'
import * as getters from './root/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions,
  modules: {
    spellcheckerStore
  }
})
