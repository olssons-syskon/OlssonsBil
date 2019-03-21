<template>
  <article class="add-cars-admin">
    <section class="add-cars-section">
      <section class="add-car">
        <p>Name:</p>
        <input type="text" v-model="car.name">
        <p>Model:</p>
        <input type="text" v-model="car.model">
        <p>Color:</p>
        <input type="text" v-model="car.color">
        <p>Info:</p>
        <input type="text" v-model="car.info">
        <p>Image:</p>
        <input type="text" v-model="car.img">
        <p>Price:</p>
        <input type="text" v-model.number="car.price">
        <a class="btn" @click="createCar">Add car</a>
      </section>
      <section class="create-admin">
        <p v-show="usernameInUse">{{usernameInUseMessage}}</p>
        <p>Username:</p>
        <input v-model="newAdminName">
        <p>Password:</p>
        <input type="password" v-model="newAdminPassword" @keyup.enter="createAdmin()">
        <a href="#" class="btn" @click="createAdmin">Create admin</a>
      </section>
    </section>
    <h4>Bookings:</h4>
    <section class="old-bookings-list" v-for="booking in bookings" :key="booking._id">
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
      <button class="cancel-booking btn" @click="id = booking._id; cancelBooking()">Cancel booking</button>

    </section>
      <h4>Old bookings:</h4>
    <section class="old-bookings-list finished" v-for="booking in finishedBookings" :key="booking._id">
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
  name: "admin-create",
  data() {
    return {
      car: {
        name: "",
        model: "",
        color: "",
        price: "",
        info: "",
        img:
          "https://cdn5.vectorstock.com/i/1000x1000/76/94/car-vintage-car-icon-flat-style-vector-8087694.jpg",
        bookable: true,
        booked: {
          from: "2000-01-01",
          to: "2000-01-01"
        }
      },
      newAdminName: "",
      newAdminPassword: "",
      usernameInUse: false
    };
  },
  methods: {
    async cancelBooking() {
      await this.$store.dispatch("cancelBooking", this.id);
    },
    async createCar() {
      await this.$store.dispatch("createCar", this.car);
      this.$router.push("/Admin");
      await this.$store.dispatch("retrieveCars");
      this.car.name = "";
      this.car.model = "";
      this.car.color = "";
      this.car.price = "";
      this.car.info = "";
    },
    async createAdmin() {
      await this.$store.dispatch("createUser", {
        username: this.newAdminName.toLowerCase(),
        password: this.newAdminPassword,
        role: "admin"
      });
      if (this.$store.state.nameNotInUse == false) {
        this.usernameInUse = true;
      } else {
        this.newAdminName = "";
        this.newAdminPassword = "";
      }
    }
  },
  computed: {
    cars() {
      return this.$store.getters.getCars;
    },
    usernameInUseMessage() {
      return this.$store.state.usernameInUseMessage;
    },
    finishedBookings() {
      return this.$store.getters.getFinishedBookings;
    },
    bookings() {
      return this.$store.getters.getBookingsByLastDate
    }

  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.add-cars-admin {
  padding-top: 2rem;

  .add-cars-section {
    display: flex;
    flex-direction: column;

    .add-car,
    .create-admin {
      width: 300px;
      margin: auto;
      display: flex;
      flex-direction: column;

      p {
        color: $ghost;
        font-family: "Montserrat";
        text-align: left;
        margin-left: .25rem;
        text-shadow: 1px 1px #fff;
        font-weight: 900;
        color:#000;
        font-size: 20px;
      }
      input {
        font-size: 1.2rem;
        padding: 0.25rem;
        margin: 0.25rem;
        border: none;
        background: $ghost;
        color: #020;
        border: 1px solid #000;
        width: auto;
      }
    }
  }
  .old-bookings-list {

    &.finished {
      opacity: 0.5;
    }
    background: $ghost;
    display: flex;
    margin: 0.5rem 0;
    padding: 0.5rem;

    .titles,
    .information {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 1.2rem;
        padding: 0.15rem;
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
      align-self: flex-end;
      margin: 0;
    }
  }
}
</style>
