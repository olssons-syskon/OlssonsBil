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
  }
}
</script>

<style lang="scss">


</style>
