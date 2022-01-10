import dictionary from '../../api/dictionary'

const state = () => ({
  query: '',
  results: []
})

const mutations = {
  setQuery(state, query) {
    state.query = query
  },

  setResults(state, results) {
    state.results = results
  }
}

const actions = {
  async search({ commit }, query) {
    const results = await dictionary.search(query)

    commit('setQuery', query)
    commit('setResults', results)
  }
}

const getters = {
  results(state) {
    return state.results
  },

  query(state) {
    return state.query
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}