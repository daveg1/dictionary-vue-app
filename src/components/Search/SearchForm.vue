<template>

<form
  class="SearchForm"
  autocomplete="off"
  spellcheck="off"
  @submit.prevent="handleSubmit"
>
  <button class="SearchForm__Button">
    <span class="SearchForm__Icon material-icons">search</span>
  </button>

  <input
    ref="search"
    class="SearchForm__Field"
    type="text"
    accesskey="S"
    placeholder="Search"
    v-model="query"
    :class="query ? 'has-value' :''"
    >

    <button class="SearchForm__Clear" type="reset" :class="!query ? 'hide' : ''">✖</button>
</form>

</template>

<script>
export default {
  name: 'SearchForm',

  data() {
    return {
      query: '',
    }
  },

  methods: {
    handleSubmit() {
      if (!this.query) {
        return;
      }

      const match = this.query
        .toLowerCase()
        .trim()
        .match(/[a-z-]/ig)

      if (!match) {
        return;
      }

      this.$emit('post', match.join(''))
    }
  }
}
</script>

<style>
.SearchForm {
  display: inline-block;
  position: relative;
}

.SearchForm__Field {
  background-color: transparent;
  border: 2px solid;
  border-radius: 40px;
  color: #ccc;
  font-weight: 600;
  line-height: 1;
  outline: 0;
  padding-block: 0.5rem;
  padding-inline: 2.3rem 1.7rem;
  transition: color 150ms ease-in, width 200ms ease-out;
  width: 10rem;
}

.SearchForm__Field.has-value,
.SearchForm__Field:focus {
  color: initial;
  width: 20rem;
}

.SearchForm__Button {
  align-items: center;
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-inline-start: 0.7rem;
  padding: 0;
  position: absolute;
  user-select: none;
}

.SearchForm__Icon {
  font-size: 1.5rem;
}

.SearchForm__Clear {
  appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 1;
  opacity: 0.5;
  padding: 0;
  position: absolute;
  right: 0.7rem;
  text-align: center;
  top: 50%;
  transform: translateY(calc(-50% - 0.05rem));
  transition: opacity 200ms;
}

.SearchForm__Clear.hide {
  opacity: 0;
}

.SearchForm__Clear:hover {
  opacity: 1;
}
</style>