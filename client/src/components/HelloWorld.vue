<template>
  <div class="hello">
    <input type="text" v-model="booking.text" >
    <button @click="createBooking">Book</button>
    <h1 v-for="(out, index) in output" :key="index">{{ out }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      booking: {
        text: ''
      }
    };
  },
  methods: {
    createBooking() {
      console.log(this.booking.text)
      this.$store.dispatch("createBooking", this.booking.text);
    }
  },
  computed: {
    output() {
      return this.$store.getters.getBookings;
    }
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 70px;
  height: 30px;
}
</style>
