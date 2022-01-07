<template>
<nav class="HeaderNav">
  <a
    class="HeaderNav__Item"
    v-for="(item, index) of items"
    :key="index"
    :href="item.link"
  >{{ item.title }}</a>
</nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  
  data() {
    return {
      items: [
        {
          title: 'Home',
          link: '#home'
        },
        {
          title: 'Favourite Words',
          link: '#fave'
        }
      ]
    }
  }
}
</script>

<style>

.HeaderNav {
  display: flex;
}

.HeaderNav__Item {
  color: currentColor;
  transition: box-shadow 200ms;
}

.HeaderNav__Item:hover {
  box-shadow: 0 2px 0;
}

.HeaderNav__Item:not(:first-child) {
  margin-inline-start: 1rem;
}

</style>