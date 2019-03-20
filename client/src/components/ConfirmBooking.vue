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
        <input type="checkbox" @click="addInsurance()">
      </div>

      <div class="information">
        <p>{{ booking.dates[0] }}</p>
        <p>{{ booking.dates[days] }}</p>
        <p>{{ booking.car }}</p>
        <p>{{ booking.cost }} SEK x {{ days }} days</p>
        <p>{{ booking.booker }}</p>
        <p class="insText">Add insurance for the vehicle for the fine amount of {{ insurance.cost }} SEK.</p>
      </div>
    </section>

    <h2>Total cost: {{ totalCost }} SEK</h2>

    <button class="btn" @click="confirmBooking">Confirm booking</button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      booking: {
        dates: this.$store.state.dates,
        car: this.$store.state.choosenCar.name,
        cost: this.$store.state.choosenCar.price,
        booker: this.$store.state.currentUser
      },
      totalCost: this.$store.state.choosenCar.price * this.$store.state.days,
      insurance: {
        cost: 499,
        choosen: false
      },
      days: this.$store.state.days
    }
  },
  methods: {
    async confirmBooking() {
      this.booking.cost = this.totalCost;
      await this.$store.dispatch('createBooking', this.booking)
      this.$router.push(`/bookings`)
    },
    addInsurance() {
      this.insurance.choosen = !this.insurance.choosen;
      if(this.insurance.choosen) {
        this.totalCost += this.insurance.cost;
      } else if(!this.insurance.choosen) {
        this.totalCost -= this.insurance.cost;
      }
    }
  },
  beforeMount() {
    if(this.$store.state.currentUser == '' || this.$store.state.dates == '') {
      this.$store.state.backToConfirm = true
      this.$store.state.backToBookings = false
      this.$router.push('user')
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
      input {
        transform: scale(2);
        margin: 1rem 1.6rem;
      }
    }

    .information {
      flex: 3;
      margin-bottom: 2rem;

      input {
        font-size: 1.2rem;
        padding: .25rem;
        margin: .25rem;
        border: none;
        background: $ghost;
      }
      .insText {
        text-align: left;
        font-size: .9rem;
        color: White;
      }
    }
  }
}

</style>
