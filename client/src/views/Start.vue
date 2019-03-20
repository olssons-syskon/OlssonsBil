<template>
  <main id="start">
    <search />
    <!-- <Range /> -->
    <router-view />
  </main>
</template>

<script>

import Search from '../components/Search.vue';
// import Range from '../components/Range.vue';


export default {
  name: 'start',
  components: {
    Search
    // Range
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

</style>
