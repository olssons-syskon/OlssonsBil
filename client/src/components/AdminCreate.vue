<template>

  <article class="add-cars">
    <h3>Name:</h3>
    <input type="text" v-model="car.name" >
    <h3>Model:</h3>
    <input type="text" v-model="car.model" >
    <h3>Color:</h3>
    <input type="text" v-model="car.color" >
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
        bookable: true,
        booked: false
      }
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch('createCar', this.car);
      this.$store.dispatch('retriveCars')
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
<style scoped>
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
