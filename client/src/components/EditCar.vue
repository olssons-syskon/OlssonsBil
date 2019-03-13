<template>
  <div class="posts">
    <h1>Update data about the car</h1>
    <div class="form">
      <div>
        <input name="name" type="text" placeholder="Name" v-model="name">
      </div>
      <div>
        <input name="model" type="text" placeholder="Model" v-model="model">
      </div>
      <div>
        <input name="price" type="text" placeholder="Price" v-model="price">
      </div>
      <div>
        <input name="bookable" type="text" placeholder="If bookable" v-model="bookable">
      </div>
      <button class="app_post_btn" @click="editCar">DO IT!</button>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    cars() {
      return this.$store.getters.getCars;
    }
  },
  methods: {
    editCar(id) {
      this.$store.dispatch("editCar", id);
      this.$store.dispatch("retriveCars");
      this.$router.push("/Admin");
    }
  }
};
</script>
<style type="text/css">
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
