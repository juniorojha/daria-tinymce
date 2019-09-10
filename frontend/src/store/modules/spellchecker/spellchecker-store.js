import { testSpellcheckerApi } from '@/api/spellchecker-fapi'

const state = {
  listNewWordsUser: []
  //...
}
const getters = {
  getListNewWordsUser: state => state.listNewWordsUser
}

const mutations = {
  setListNewWordsUser: (state, list) => {
    state.listNewWordsUser = list
  }
}

const actions = {
  async getListNewWordsUser({ commit }) {
    const response = await testSpellcheckerApi()
    commit('setListNewWordsUser', response)
    return response
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
