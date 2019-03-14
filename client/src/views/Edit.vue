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
  },
    beforeMount() {
    console.log("gfgfg"+this.$store.state.eChosenCar)
  }
}
</script>

<style lang="scss">

</style>
