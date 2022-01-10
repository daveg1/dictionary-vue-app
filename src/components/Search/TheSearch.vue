<template>
<div class="SearchBoxHolder">
  <h2 class="SearchBoxHolder__Title">Search the dictionary</h2>
  <SearchForm @post="handlePost" />
</div>
</template>

<script>
import SearchForm from './SearchForm.vue'

export default {
  name: 'TheSearchBox',
  components: { SearchForm },

  methods: {
    handlePost(query) {
      this.$store.dispatch('search/search', query)
    },
  }
}
</script>

<style>

.SearchBoxHolder {
  margin-block: 2rem;
}

.SearchBoxHolder__Title {
  margin-block-end: 1rem;
}

</style>