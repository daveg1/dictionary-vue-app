<template>
<header class="Header">
  <div class="Header__Wrap Wrap">
    <div class="Header__Start">
      <TheBrand/>
    </div>
    <div class="Header__End">
      <HeaderNav/>
    </div>
  </div>
</header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import TheBrand from '../TheBrand.vue'

export default {
  name: 'TheHeader',
  components: { HeaderNav, TheBrand },
  props: ['brand']
}
</script>

<style>

.Header {
  background-color: var(--color-primary);
}

.Header__Wrap {
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.Header__Start,
.Header__End {
  align-items: center;
  display: flex;
}

</style>