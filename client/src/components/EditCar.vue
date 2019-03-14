<template>
  <div class="edit">
    <h1>Update data about the car</h1>
    <div class="form">
      <div>
        <input name="name" type="text" placeholder="Name" v-model="car.name">
      </div>
      <div>
        <input name="model" type="text" placeholder="Model" v-model="car.model">
      </div>
      <div>
        <input name="price" type="text" placeholder="Price" v-model="car.price">
      </div>
      <div>
        <input name="bookable" type="text" placeholder="If bookable" v-model="car.bookable">
      </div>
      <button class="app_post_btn" @click="editCar(car.id)">DO IT!</button>
    </div>
  </div>
</template>

<script>

export default {
   data() {
    return {
      car: {
        name: '',
        model: '',
        color: '',
        price: '',
        bookable: true
     /*    booked: {
          from: '2000-01-01',
          to: '2000-01-01'
        } */
      }
    };
  },
  beforeCreated(){
   // console.log(id)
  },
  computed: {
    cars() {
      //return this.$store.getters.getCars;
      return this.$route.params.data
    }
  },
  methods: {
    editCar(id) {
      var id = this.$route.params.id;
      name = this.$route.params.name
      console.log(id)
      this.$store.dispatch("editCar", id);
      console.log('dispatched editCar')
      this.$store.dispatch("retrieveCars");
      console.log('dispatched retrieveCars')

      this.$router.push(`/admin`);
    }
  }
};
</script>
<style type="text/css">
h1 {
  color:brown
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
