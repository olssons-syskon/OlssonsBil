<template>
  <div>
    <h2>Choose you max price/day</h2>

  <input
    type="range"
    min="0"
    v-bind:max="max"
    v-bind:value="node"
    v-on:input="onChg($event)">


  <!--   <span>Till</span>
    <input type="range" name="till" v-model="value_till">
    <input type="number" v-model="value_till">
    <br> -->
    <!-- <p v-if="errorMessage">{{errorMessage}}</p> -->
    <button class="btn" @click="findCarFromRange()">Show cars is range from 0 to {{node}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      min:0,
      max:5000,
      node: 2000,
      //value_from: "250",
      //value_till: "500",
      //errorMessage: null
    };
  },
  methods: {
     onChg (e) {
      this.node = e.target.value;
    },
   
    findCarFromRange() {
      // if (this.value_from > 0 && this.value_till > this.value_from) {
         
      this.$store.dispatch("findCarFromRange", { min: 0, value: this.node });
      this.$router.push(`/choose-car`)
      } /* else {
        this.errorMessage =
          "Please choose price from 0 to 1000. Second parametr should be higher that first.";
      } */
    }
  
};
</script>

<style>
* {
  color: black;
}
h2 {
  margin: 1rem 0;
}

input {
  width: 5.5rem;
  padding: 0.8rem;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1rem;
}
</style>

