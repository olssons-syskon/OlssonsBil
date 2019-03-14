<template>
  <article class="confirm-booking">
    <h1>Booking details</h1>
    <section class="container">
      <div class="titles">
        <p>From:</p>
        <p>To: </p>
        <p>Car: </p>
        <p>Cost: </p>
        <p>Name: </p>
      </div>

      <div class="information">
        <p>{{ booking.fromDate }}</p>
        <p>{{ booking.toDate }}</p>
        <p>{{ booking.car }}</p>
        <p>{{ booking.cost }}</p>
        <input type="text" v-model="booking.booker">
      </div>
    </section>

    <div class="extras">
      <h2 v-model="totalCost">Total cost: {{ totalCost }}</h2>
    </div>

    <button class="btn" @click="confirmBooking">Confirm Booking</button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      booking: {
        fromDate: this.$store.state.startDate,
        toDate: this.$store.state.endDate,
        car: this.$store.state.choosenCar.name,
        cost: this.$store.state.choosenCar.price,
        booker: ""
      },
      totalCost: this.$store.state.choosenCar.price
    }
  },
  methods: {
    confirmBooking() {
      this.$store.dispatch('createBooking', this.booking)
      this.$router.push(`/bookings`)
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.confirm-booking {
  margin: 2rem;
  font-family: $text;

  h1 {
    margin-bottom: 1rem;
  }

  .container {
    max-width: 300px;
    display: flex;
    margin: auto;

    .titles, .information {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 1.2rem;
        padding: .5rem;
      }
    }

    .titles {
      p {
        font-weight: bold;
      }
    }

    .information {
      flex: 3;

      input {
        font-size: 1.2rem;
        padding: .25rem;
        margin: .25rem;
        border: none;
        background: rgba($color: WhiteSmoke, $alpha: .5);
      }
    }
  }

  .extras {
    margin-top: 3rem;
  }
}

</style>
