<template>
<div class="Results__List">
  <Result
    v-for="(result,index) of results"
    :key="index"
    :count="index+1"
    :result="result"
  />
</div>
</template>

<script>
import Result from './Result.vue'

export default {
  name: 'ResultList',
  components: { Result },
  props: ['results']
}
</script>

<style>

</style>

