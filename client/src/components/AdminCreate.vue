<template>
  <article class="add-cars-admin">
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
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.add-cars-admin {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;

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
      margin-left: 1.8rem;
    }
    input {
      font-size: 1.2rem;
      padding: 0.25rem;
      margin: 0.25rem;
      border: none;
      background: $ghost;
    }
  }
}
</style>
