<template>
  <article class="add-cars">
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
    </section>
    <a class="btn" @click="createCar">Add</a>
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
        booked: []
      }
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.car);
      this.$store.dispatch("retrieveCars");
      this.$store.dispatch("retrieveCars");
      this.$router.push("/Admin");
      this.$store.dispatch("retrieveCars");
    }
  },
  computed: {
    cars() {
      return this.$store.getters.getCars;
    }
  }
};
</script>

<style lang="scss">

@import '../scss/main.scss';

.add-cars {

  .add-car {
    width: 300px;
    margin: auto;

    p {
      color: $ghost;
      font-family: 'Montserrat';
      text-align: left;
      margin-left: 1.8rem;
    }
    input {
      font-size: 1.2rem;
      padding: .25rem;
      margin: .25rem;
      border: none;
      background: $ghost;
      color: #020;
    }
  }
}

</style>
