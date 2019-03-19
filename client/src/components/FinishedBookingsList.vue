<template>
  <article class="finished-bookings">
    <section class="finished-bookings-list"></section>
  </article>
</template>

<script>
export default {
  name: "finished-bookings",
  data() {
      return {
        date: Date.now()
      }
  },
  computed: {
    bookings() {
      return this.$store.getters.getBookings;
    },
    // finishedBookings() {
    //     return this.bookings.filter(booking => {
    //         return booking.dates[booking.dates[-1] > ]
    //     })
    // }
  }
};
</script>

<style>
</style>
