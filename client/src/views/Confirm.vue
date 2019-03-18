<template>
  <main id="confirm">
    <ConfirmBooking />
  </main>
</template>

<script>
import ConfirmBooking from '../components/ConfirmBooking'
export default {
  name: 'confirm',
  components: {
    ConfirmBooking
  },
  beforeMount() {
    if(this.$store.state.choosenCar.name == 'test') {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">

</style>
