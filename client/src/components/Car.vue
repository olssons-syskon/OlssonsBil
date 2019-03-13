<template>
  <section id="car" @click="selectCar(car)">
    <h2>{{ car.name }}</h2>
    <p>{{ car.model }}</p>
    <p class="price">{{ car.price }} SEK</p>
  </section>
</template>

<script>
export default {
  name: 'car',
  props: ['car'],
  methods: {
    selectCar(car) {
      this.$store.commit('selectCar', car);
      this.$router.push(`/confirm`)
    }
  }
}
</script>

<style lang="scss">

#car {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: WhiteSmoke;
  box-sizing: border-box;
  padding: .5rem;
  margin-bottom: .25rem;

  h2, p {
    margin: 0;
  }
  .price {
    align-self: flex-end;
    font-weight: bold;
  }


  @media screen and (max-width: 480px) {
    width: 80vw;
  }

}

</style>
