<template>
  <article class="add-cars">
    <h3>Name:</h3>
    <input type="text" v-model="car.name" >
    <h3>Model:</h3>
    <input type="text" v-model="car.model" >
    <h3>Color:</h3>
    <input type="text" v-model="car.color" >
    <h3>Info:</h3>
    <input type="text" v-model="car.info" >
    <h3>Image:</h3>
    <input type="text" v-model="car.img">
    <h3>Price:</h3>
    <input type="text" v-model.number="car.price" >
    <button @click="createCar">Add</button>
  </article>
</template>

<script>
export default {
  name: "admin-create",
  data() {
    return {
      car: {
        name: '',
        model: '',
        color: '',
        price: '',
        info: '',
        img: 'https://cdn5.vectorstock.com/i/1000x1000/76/94/car-vintage-car-icon-flat-style-vector-8087694.jpg',
        bookable: true,
        booked: {
          from: '2000-01-01',
          to: '2000-01-01'
        }
      }
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch('createCar', this.car);
      this.$store.dispatch('retrieveCars')
      this.$store.dispatch("retrieveCars");
      this.$router.push("/Admin");
      this.$store.dispatch("retrieveCars");

    }
  },
  computed: {
    cars() {
      return this.$store.getters.getCars;
    }
  },
  beforeMount() {
    this.$store.dispatch('retrieveCars')
  }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style land="css" scoped>
  .add-cars {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: #000;
    color:rgb(255, 0, 157);
    padding: 1rem;
  }
  .add-cars h3 {
    margin: 0;
    justify-self: start;
  }
  .add-cars input {
    border: 2px solid #000;
    margin: .7rem;
  }
  section {
    margin: .5rem;
  }
</style>
