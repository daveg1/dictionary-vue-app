<template>
<div class="SearchBoxHolder">
  <h2 class="SearchBoxHolder__Title">Search the dictionary</h2>
  <SearchForm @post="handlePost" />
</div>
</template>

<script>
import SearchForm from './SearchForm.vue'
import search from './search'

export default {
  name: 'TheSearchBox',
  components: { SearchForm },

  methods: {
    async handlePost(query) {
      const results = await search(query)
      this.$emit('search', {
        word: query,
        results
      })
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