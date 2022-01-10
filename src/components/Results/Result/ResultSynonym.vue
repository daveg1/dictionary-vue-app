<template>
<span class="ResultSynonym" @click="handeClick(syn)">{{ text }}</span>
</template>

<script>
export default {
  name: 'ResultSynonym',
  props: ['text'],

  methods: {
    handeClick(word) {
      this.$store.dispatch('search/search', word)
    }
  }
}
</script>

<style>
.ResultSynonym {
  background-color: var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  margin: 0.25rem;
  padding-inline: 0.3rem;
}

.ResultSynonym:hover {
  background-color: #ccc;
}
</style>