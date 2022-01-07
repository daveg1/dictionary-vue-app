<template>
<article class="Result">
  <header class="Result__Header">
    <h2>{{ result.word }}<sup>{{ count }}</sup></h2>
    <span class="Result__Phonetic" v-show="result.phonetic">/{{ result.phonetic }}/</span>
  </header>

  <main>
    <section class="MeaningsList" v-for="(meaning,idx) of result.meanings" :key="idx">
      <h3>{{ meaning.partOfSpeech }}</h3>
      <ol>
        <li class="Entry" v-for="(entry,idx) of meaning.definitions" :key="idx">
          <p class="Entry__Definition">{{ entry.definition }}</p>
          <p class="Entry__Example" v-show="entry.example">"{{ entry.example }}"</p>
          <div class="Entry__Synonyms" v-show="entry.synonyms.length">
            <span>Synonyms:</span>
            <span
              class="Entry__Synonym"
              v-for="(syn,idx) of entry.synonyms"
              :key="idx"
              @click="handleClickSynonym(syn)"
            >{{ syn }}</span>
          </div>
        </li>
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
export default {
  props: ['count', 'result'],

  methods: {
    handleClickSynonym(word) {
      console.log(word, this.$refs)
    }
  }
}
</script>

<style>
.Result {
  margin-block-end: 2rem;
}

.Result__Header {
  align-items: center;
  display: flex;
}

.Result__Header sup {
  color: var(--color-text-alt);
  font-size: 0.6em;
  padding-inline-start: 0.2rem;
}

.Result__Phonetic {
  background-color: var(--color-primary);
  border-radius: 3px;
  letter-spacing: 0.3px;
  padding-inline: 0.3rem;
  margin-inline-start: 0.7rem;
}

.MeaningsList {
  margin-block-end: 1rem;
}

.Entry:not(:last-child) {
  margin-block-end: 0.5rem;
}

.Entry__Example {
  color: var(--color-text-alt);
  font-style: oblique;
}

.Entry__Synonyms {
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;
}

.Entry__Synonym {
  background-color: var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  margin: 0.25rem;
  padding-inline: 0.3rem;
}

.Entry__Synonym:hover {
  background-color: #ccc;
}
</style>