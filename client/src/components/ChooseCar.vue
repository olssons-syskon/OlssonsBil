<template>
  <article class="choose-car">
    <div class="available-cars">
      <h2 class="title">Avaliable cars</h2>
      <div>
        <car v-for="car in availableCars" :key="car._id" :car="car" />
      </div>
    </div>
    <div class="booked-cars">
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

      let cars = this.$store.getters.getCars;
      let search = this.$store.state.dates;
      let occupied = [];

      cars.forEach(car => {
        search.forEach(date => {
          car.booked.forEach(booked => {
            if(booked == date){
              console.log()
              if(!occupied.includes(car))
              occupied.push(car);
            }
          })
        })
      })

      console.log(occupied)

      let avaliable = cars;
      console.log("Ein " + avaliable.length)
      for (var i = 0; i < occupied.length; i++) {
        console.log("Zwei " + avaliable.length)
        var n = avaliable.indexOf(occupied[i])
        console.log("Drei " + avaliable.length)
        avaliable.splice(n, 1)
        console.log('-----------------')
        console.log(avaliable)
      }
      console.log("Vier " + avaliable.length)
      return avaliable;
    },
    bookedCars() {
      let cars = this.$store.getters.getCars;
      let search = this.$store.state.dates;
      let occupied = [];

      cars.forEach(car => {
        search.forEach(date => {
          car.booked.forEach(booked => {
            if(booked == date){
              if(!occupied.includes(car))
              occupied.push(car);
            }
          })
        })
      })
      return occupied;
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

    .title {
      padding: .5rem;
      color: $ghost;
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
