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
    // console.log(this.$store.state.bookings)
  }
}
</script>

<style lang="scss">


</style>
