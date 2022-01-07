<template>
<TheHeader/>

<main class="Wrap">
  <TheSearch @search="handleSearch" />
  <TheResults :word="word" :results="results" />
</main>
</template>

<script>
import TheHeader from './components/Header/TheHeader.vue'
import TheSearch from './components/Search/TheSearch.vue'
import TheResults from './components/Results/TheResults.vue'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheSearch,
    TheResults
  },

  data() {
    return {
      word: '',
      results: []
    }
  },

  methods: {
    handleSearch(event) {
      const { word, results } = event

      this.word = word
      this.results = Array.isArray(results) ? results : []
    }
  }
}
</script>