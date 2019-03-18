<template>
  <article class="bookings-list">
    <section class="bookings-list-container" v-for="booking in bookings" :key="booking._id">
      <h3>Date:</h3>
      <div>
        {{ booking.fromDate }}
        <span>to</span>
        {{ booking.toDate }}
      </div>

      <div class="information">
        <div>
          <p>{{ booking.fromDate.slice(0,10) }}
          <span>to</span>
          {{ booking.toDate.slice(0,10) }}</p>
        </div>
        <p>{{ booking.car }}</p>
        <p>{{ booking.cost }}</p>
        <p>{{ booking.booker }}</p>
      </div>

      <button class="cancel-booking btn" @click="id = booking._id; cancelBooking()">Cancel booking</button>
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

<style lang="scss">

@import '../scss/main.scss';

.bookings-list {
    max-width: 500px;
    margin: auto;

  .bookings-list-container {
    background: $ghost;
    display: flex;
    margin: .5rem 0;
    padding: .5rem;

    .titles, .information {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 1.2rem;
        padding: .15rem;
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
      margin-bottom: .5rem;
    }

    .btn {
      transform: scale(.9);
      height: 3rem;
      align-self: flex-end;
      margin: 0;
    }
  }
}

/*
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
}*/
</style>
