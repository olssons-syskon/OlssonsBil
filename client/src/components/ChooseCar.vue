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

      // datumet man söker på
      let searchStartDate = this.$store.state.startDate;
      let sYear = searchStartDate.slice(0,4);
      let sMonth = searchStartDate.slice(5,7);
      let sDay = searchStartDate.slice(8,10);
      // console.log(sYear,sMonth,sDay)

      console.log(this.$store.getters.getCars)

      // kollar om det sökta bokningsdatumet är "högre" än det bilen är bokad till
      return this.$store.getters.getCars.filter((car) => {
        return car.booked.to.slice(0,4) <= sYear && car.booked.to.slice(5,7) <= sMonth && car.booked.to.slice(8,10) < sDay;
      })
    },
    bookedCars() {
      return this.$store.getters.getCars;
      // alla bilar som är bokade någon gång ever
      // return this.$store.getters.getCars.filter(car => car.booked == true);
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.choose-car {
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 90vw;
  width: 450px;

  .available-cars {
  }

  .booked-cars {
  }
}

</style>
