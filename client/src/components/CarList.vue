<template>
  <div class="container">
    <section class="cars">
      <table cellspacing="0">
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Color</td>
            <td>Price/day</td>
            <td>Bookable</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car, index) in cars" :key="index">
            <td>{{ car.name }}</td>
            <td>{{ car.model }}</td>
            <td>{{ car.color }}</td>
            <td>{{ car.price }}</td>
            <td>{{ car.bookable }}</td>
            <a class="btn" @click="deleteCar(car._id)">Delete</a>
            <a class="btn" @click=" chosenCar = car; editCar(car._id)">Edit</a>
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
        bookable: true,
        booked: false
      },
      chosenCar: ""
    };
  },

  beforeMount() {
    this.$store.dispatch("retrieveCars");
  },

  computed: {
    cars() {
      return this.$store.getters.getCars;
    }
  },
  methods: {
    deleteCar(id) {
      console.log(id);
      this.$store.dispatch("deleteCar", id);
      this.$store.dispatch("retrieveCars");
      this.$router.push("/Admin");
      this.$store.dispatch("retrieveCars");
    },
    editCar(id) {
      console.log(id);
      this.$store.commit("setChosenCar", this.chosenCar);
      this.$router.push(`/edit/${id}`);
      //<router-link to="/confirm">Admin</router-link>
    }
  }
};
</script>

<style lang="scss">

@import '../scss/main.scss';

.container {
  display: flex;
  justify-content: center;

  .cars {

    table {
      text-align: left;
      margin: .5rem;
      padding: .5rem;

      thead {
        td {
          font-family: 'Montserrat';
          font-weight: bold;
        }
      }

      td {
        padding: .15rem .5rem;
      }
      a {
        font-size: .8rem;
        padding: .5rem;
        margin: .25rem .15rem;
      }

      tbody {
        background: $ghost;
        padding: .5rem;
        border-radius: 3px;
      }
    }
  }
}


/*
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.534);
  font-weight: 900;
  color: #000;
  padding: 1rem 0;
}

table {
}

thead tr {
  font-weight: bold;
}

tbody td {
  color: wheat;
  justify-self: start;
  font-weight: bold;
  border-bottom: 1px solid #000;
  padding: .8rem 0;
}*/
</style>
