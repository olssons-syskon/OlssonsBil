<template>
  <main id="start">
    <search />
    <router-view />
  </main>
</template>

<script>

import Search from '../components/Search.vue';

export default {
  name: 'start',
  components: {
    Search
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

:root {
  background: $background;
}

</style>
