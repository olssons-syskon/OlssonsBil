<template>
  <article class="edit">
    <h1>Edit car</h1>
    <div class="form">
        <div>
          <input name="name" type="text" placeholder="Name" v-model="eCar.name">
        </div>
        <div>
          <input name="model" type="text" placeholder="Model" v-model="eCar.model">
        </div>
        <div>
          <input name="bookable" type="text" placeholder="If bookable" v-model="eCar.color">
        </div>
        <div>
          <input name="price" type="text" placeholder="Price" v-model="eCar.price">
        </div>
        <div>
          <input name="bookable" type="text" placeholder="If bookable" v-model="eCar.bookable">
        </div>
        <div>
          <input name="booked from" type="text" placeholder="Is booked from" v-model="eCar.booked.from.slice(0,10)">
        </div>
        <div>
          <input name="booked to" type="text" placeholder="Is booked to" v-model="eCar.booked.to.slice(0,10)">
        </div>
        <a class="app_post_btn btn" @click="editCar(eCar)">DO IT!</a>
    </div>
  </article>
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
        color:"",
        bookable: true
      }
    };
  },
  beforeMount() {
    console.log(this.eCar)
  },
  computed: {
    eCar() {
      return this.$store.getters.getChosenCar;
      //return this.$route.params.data
    }
  },
  methods: {
    editCar(data) {
      //var id = this.$route.params.id;
      //name = this.$route.params.name
      //console.log(id);
      this.$store.dispatch("editCar", data);
      console.log("dispatched editCar");

      this.$store.dispatch("retrieveCars");
      console.log("dispatched retrieveCars");
      this.$router.push(`/admin`);
      this.$store.dispatch("retrieveCars");
    }
  }
};
</script>

<style lang="scss">

@import '../scss/main.scss';

.edit {
  h1 {
    color: #020;
  }
  input {
    font-size: 1.2rem;
    padding: .25rem;
    margin: .25rem;
    border: none;
    background: $ghost;
  }
}

</style>
