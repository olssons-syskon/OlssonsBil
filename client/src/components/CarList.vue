<template>
  <div class="container">
    <section class="cars">
      <table cellspacing="0">
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Year</td>
            <td>Color</td>
            <td>Price (kr/day)</td>
            <!--    <td>Bookable</td>
            <td>Booked</td>-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car, index) in cars" :key="index">
            <td>{{ car.name }}</td>
            <td>{{ car.model }}</td>
            <td>{{ car.year }}</td>
            <td>{{ car.color }}</td>
            <td>{{ car.price }}</td>
            <!-- <td>{{ car.bookable }}</td>
            <td>{{ car.booked }}</td>-->
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {
        name: "",
        model: "",
        color: "",
        price: "",
        year: "",
        bookable: true,
        booked: false
      }
    };
  },
  beforeMount() {
    this.$store.dispatch("retriveCars");
  },

  computed: {
    cars() {
      return this.$store.getters.getCars;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container { align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: #000;
    color:rgb(255, 0, 157);
    padding: 1rem;
  }

thead tr{
    font-weight: bold;
  }

tbody td {
   margin:10px;
   padding: 10px;
   color: wheat;
   justify-self: start;
   font-weight: bold;

  }

</style>
