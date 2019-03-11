<template>
  <article class="choose-car">
    <div class="available-cars">
      <car v-for="car in availableCars" :key="car._id" :car="car" />
    </div>
    <div class="booked-cars">
      <car v-for="car in bookedCars" :key="car._id" :car="car" />
    </div>
  </article>

</template>

<script>

import Car from './Car.vue'

export default {
  name: 'chooseCar',
  components: {
    Car
  },
  computed: {
    availableCars() {
      return this.$store.getters.getCars.filter(car => car.booked == true);
    },
    bookedCars() {
      return this.$store.getters.getCars.filter(car => car.booked == false);
    }
  }
}
</script>

<style lang="scss">

.choose-car {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 450px;
  border: 3px dotted Blue;

  .available-cars {
    border: 2px dashed Green;
  }

  .booked-cars {
    border: 2px solid Crimson;
  }
}

</style>
