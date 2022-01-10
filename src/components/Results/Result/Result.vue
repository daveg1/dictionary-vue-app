<template>
<article class="Result">
  <header class="Result__Header">
    <h2>{{ result.word }}<sup>{{ count }}</sup></h2>
    <span class="Result__Phonetic" v-show="result.phonetic">/{{ result.phonetic }}/</span>
  </header>

  <main>
    <section class="MeaningsList" v-for="(meaning,idx) of result.meanings" :key="idx">
      <h3>{{ meaning.partOfSpeech }}</h3>
      <ol class="Definitions">
        <ResultDefinition
          v-for="(entry,idx) of meaning.definitions"
          :key="idx"
          :definition="entry.definition"
          :example="entry.example"
          :synonyms="entry.synonyms"
        />
      </ol>
    </section>
  </main>

  <footer v-show="result.origin">
    <h3>Origin</h3>
    <p>{{ result.origin }}</p>
  </footer>
</article>
</template>

<script>
import ResultDefinition from './ResultDefinition.vue'

export default {
  props: ['count', 'result'],

  components: { ResultDefinition },
}
</script>

<style>
.Result {
  margin-block-end: 2rem;
}

.Result__Header sup {
  color: var(--color-text-alt);
  font-size: 0.6em;
  padding-inline-start: 0.2rem;
}

.Result__Phonetic {
  background-color: var(--color-primary);
  border-radius: 3px;
  display: inline-block;
  letter-spacing: 0.3px;
  margin-block: 1rem;
  padding-inline: 0.3rem;
}

.MeaningsList {
  margin-block-end: 1rem;
}
</style>