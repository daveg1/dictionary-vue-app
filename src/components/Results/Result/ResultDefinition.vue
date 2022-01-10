<template>
<li class="ResultDefinition">
  <p class="ResultDefinition__Definition">{{ definition }}</p>
  <p class="ResultDefinition__Example" v-show="example">"{{ example }}"</p>
  <div class="ResultDefinition__Synonyms" v-show="synonyms.length">
    <span>Synonyms:</span>
    <ResultSynonym 
      v-for="(word,index) of synonyms"
      :key="index"
      :text="word"
    />
  </div>
</li>
</template>

<script>
import ResultSynonym from './ResultSynonym.vue'

export default {
  name: 'ResultDefinition',
  props: ['definition', 'example', 'synonyms'],
  components: { ResultSynonym },
}
</script>

<style>
.ResultDefinition {
  margin-top: 0.5rem;
}

.ResultDefinition__Example {
  color: var(--color-text-alt);
  font-style: oblique;
}

.ResultDefinition__Synonyms {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;
  margin-top: 0.5rem;
}
</style>