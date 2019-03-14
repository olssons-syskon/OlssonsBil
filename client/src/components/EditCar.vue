<template>
  <div class="edit">
    <h1>Update data about the car</h1>
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
          <input name="booked from" type="text" placeholder="Is booked from" v-model="eCar.booked.from">
        </div>
        <div>
          <input name="booked to" type="text" placeholder="Is booked to" v-model="eCar.booked.to">
        </div>
        <button class="app_post_btn" @click="editCar(eCar)">DO IT!</button>
        <!-- <input type="submit" value="Submit"> -->
    </div>
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
        color:"",
        bookable: true
        /*    booked: {
          from: '2000-01-01',
          to: '2000-01-01'
        } */
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
<style type="text/css">
h1 {
  color: brown;
}
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
