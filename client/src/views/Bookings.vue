<template>
  <main id="bookings">
    <BookingList />
  </main>
</template>

<script>
import BookingList from '../components/BookingsList'
export default {
  name: 'bookings',
  components: {
    BookingList
  },
  beforeMount() {
    this.$store.dispatch("retrieveBookings");
  }
}
</script>

<style lang="scss">


</style>
