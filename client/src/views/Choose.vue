<template>
  <main id="choose">
    <Range />
    <Choose />
    <router-view />
  </main>
</template>

<script>

import Choose from '../components/ChooseCar.vue';
import Range from '../components/Range.vue';


export default {
  components: {
    Choose,
    Range
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

</style>
