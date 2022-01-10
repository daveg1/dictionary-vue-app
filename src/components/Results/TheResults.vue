<template>
<div v-show="hasSearched" class="Results">
  <ResultList v-if="hasResults" :results="results" />

  <div v-else class="NoResults">
    <h2 class="NoResults__Title">No results for "{{query}}"</h2>
    <p>Sorry, no results found. You may have to check your spelling.</p>
    <p>Otherwise, the word is not present in dictionary.</p>
  </div>
</div>
</template>

<script>
import ResultList from './ResultsList/ResultList.vue'

export default {
  name: 'TheResults',

  components: { ResultList },

  computed: {
    results() {
      return this.$store.getters['search/results']
    },

    query() {
      return this.$store.getters['search/query']
    },

    hasResults() {
      return this.results.length > 0
    },

    hasSearched() {
      return this.query !== ''
    }
  }
}
</script>

<style>
.NoResults {
  border-inline-start: 3px solid;
  background-image: linear-gradient(90deg, #eee, transparent);
  padding: 1rem;
}

.NoResults__Title {
  margin-block-end: 0.5rem;
}

.NoResults__Title::before {
  /* content: '✖ '; */
  opacity: 0.5;
}
</style>