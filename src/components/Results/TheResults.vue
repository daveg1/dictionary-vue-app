<template>
<div v-show="hasSearched" class="Results">
  <ResultList v-if="hasResults" :results="results" />

  <div v-else class="NoResults">
    <h2 class="NoResults__Title">No results for "{{word}}"</h2>
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

  props: ['word', 'results'],

  computed: {
    hasSearched() {
      return !!this.word
    },

    hasResults() {
      return !!this.results.length
    },
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