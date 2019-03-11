<template>
  <main id="start">
    <search />
    <router-view />
  </main>
</template>

<script>

import Search from '../components/Search.vue';
import ChooseCar from '../components/ChooseCar.vue';

export default {
  name: 'start',
  components: {
    Search,
    ChooseCar
  }
}
</script>

<style lang="scss">

</style>
