<template>
  <article class="bookings-list">
    <section class="bookings-list-container" v-for="booking in bookings" :key="booking._id">
      <h3>Date:</h3>
      <div>
        {{ booking.fromDate }}
        <span>to</span>
        {{ booking.toDate }}
      </div>
      <h3>Car:</h3>
      <div>{{ booking.car }}</div>
      <h3>Cost:</h3>
      <div>{{ booking.cost }}</div>
      <h3>Name:</h3>
      <div>{{ booking.booker }}</div>
      <button class="cancel-booking" @click="id = booking._id; cancelBooking()">Cancel booking</button>
    </section>
  </article>
</template>

<script>
export default {
  name: "bookings-list",
  data() {
    return {
      id: ""
    };
  },
  computed: {
    bookings() {
      return this.$store.getters.getBookings;
    },
    filteredBookingsByUser() {
      return this.bookings.filter(booking => {
        return booking.booker === this.$store.state.currentUser;
      });
    }
  },
  methods: {
    async cancelBooking() {
      await this.$store.dispatch("cancelBooking", this.id);
    }
  },
  beforeMount() {
    this.$store.dispatch("retrieveBookings");
    if (this.$store.state.currentUser == "") {
      this.$store.state.backToBookings = true;
      this.$router.push("user");
    }
  }
};
</script>

<style lang="css" scoped>
.bookings-list {
  background: rgba(0, 0, 0, 0.534);
}
.bookings-list-container {
  color: rgb(255, 0, 179);
  border-bottom: 1px solid rgb(255, 0, 179);
  padding: 1rem 0;
}

h3 {
  margin: 0;
}

.bookings-list div {
  color: #39ff14;
}

span {
  color: rgb(255, 0, 179);
}
</style>
