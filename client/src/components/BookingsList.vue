<template>
  <article class="bookings-list">
    <section
      class="bookings-list-container"
      v-for="booking in getBookingsByUser"
      :key="booking._id"
    >
      <div class="titles">
        <p>Date:</p>
        <p>Car:</p>
        <p>Cost:</p>
        <p>Name:</p>
      </div>

      <div class="information">
        <div>
          <p>
            {{ booking.dates[0] }}
            <span>to</span>
            {{ booking.dates[booking.dates.length-1] }}
          </p>
        </div>
        <p>{{ booking.car }}</p>
        <p>{{ booking.cost }}</p>
        <p>{{ booking.booker }}</p>
      <button class="cancel-booking btn" @click="id = booking._id; cancelBooking(booking)">Cancel booking</button>
      </div>

    </section>
      <h4>Old bookings:</h4>
    <section
      class="bookings-list-container finished"
      v-for="booking in getBookingsByFinished"
      :key="booking._id"
    >
      <div class="titles">
        <p>Date:</p>
        <p>Car:</p>
        <p>Cost:</p>
        <p>Name:</p>
      </div>

      <div class="information">
        <div>
          <p>
            {{ booking.dates[0] }}
            <span>to</span>
            {{ booking.dates[booking.dates.length-1] }}
          </p>
        </div>
        <p>{{ booking.car }}</p>
        <p>{{ booking.cost }}</p>
        <p>{{ booking.booker }}</p>
      </div>

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
    todaysDate() {
      return this.$store.state.todaysDate;
    },
    getBookingsByFinished() {
      return this.$store.getters.getFinishedBookings.filter(booking => {
        return booking.booker === this.$store.state.currentUser
      })
    },
    getBookingsByUser() {
      return this.$store.getters.getBookingsByLastDate.filter(booking => {
        return booking.booker === this.$store.state.currentUser
      })
    }
  },
  methods: {
    async cancelBooking(booking) {
      await this.$store.dispatch("cancelBooking", this.id);
    }
  },
  beforeMount() {
    this.$store.dispatch("retrieveBookings");
    if (this.$store.state.currentUser == "") {
      this.$store.state.backToBookings = true;
      this.$store.state.backToConfirm = false
      this.$router.push("user");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.bookings-list {
  max-width: 500px;
  margin: auto;

  .bookings-list-container {
    background: $ghost;
    display: flex;
    margin: 0.5rem 0;
    padding: 0.5rem;

    &.finished {
      opacity: 0.5;
    }

    .titles,
    .information {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 1rem;
        padding: 0.15rem;
        width: 100%;
        text-align: left;
      }

    }

    .titles {
      flex: 1;

      p {
        font-weight: bold;
      }
    }

    .information {
      flex: 3;
      margin-bottom: 0.5rem;
    }

    .btn {
      transform: scale(0.9);
      height: 3rem;
      margin: 0;
      align-self: flex-end;
    }
  }

}
</style>
