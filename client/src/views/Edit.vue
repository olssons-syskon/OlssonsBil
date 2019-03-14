<template>
  <main id="admin">
    <EditCar />
        <router-view />
  </main>
</template>

<script>
import EditCar from '../components/EditCar'

export default {
  components: {
   EditCar
  }
}
</script>

<style lang="scss">

</style>
