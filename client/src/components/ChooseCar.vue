<template>
  <article class="choose-car">
    <div class="available-cars">
      <h2 class="title">Avaliable cars</h2>
      <div>
        <car v-for="car in availableCars" :key="car._id" :car="car" />
      </div>
    </div>
    <div class="booked-cars" v-if="bookedCars.length > 0">
      <h2 class="title">Booked cars</h2>
      <div>
        <car v-for="car in bookedCars" :key="car._id" :car="car" />
      </div>
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

      // kollar om det sökta bokningsdatumet är "högre" än det bilen är bokad till
      let avaliable = this.$store.getters.getCars.filter((car) => {
        return car.booked.to.slice(0,4) <= sYear && car.booked.to.slice(5,7) <= sMonth && car.booked.to.slice(8,10) < sDay;
      })
      console.log(avaliable)
      return avaliable;
    },
    bookedCars() {
      // return this.$store.getters.getCars;
      let searchStartDate = this.$store.state.startDate;
      let sYear = searchStartDate.slice(0,4);
      let sMonth = searchStartDate.slice(5,7);
      let sDay = searchStartDate.slice(8,10);

      // kollar om det sökta bokningsdatumet är "högre" än det bilen är bokad till
      return this.$store.getters.getCars.filter((car) => {
        return car.booked.to.slice(0,4) >= sYear && car.booked.to.slice(5,7) >= sMonth && car.booked.to.slice(8,10) >= sDay;
      })
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.choose-car {
  display: flex;
  flex-direction: column;
  align-items: center;

  .available-cars, .booked-cars {
    background: Black;

    .title {
      background: #020;
      padding: .5rem;
      color: White;
    }
  }

  .booked-cars {
    div {
      opacity: .6;
      pointer-events: none;
    }
  }
}

</style>
