<template>
  <section id="car" @click="selectCar(car)">
    <img v-bind:src="car.img"  alt="">
    <div class="car-info">
      <h2>{{ car.name }}</h2>
      <h3>{{ car.model }}</h3>
      <p class="info">{{ car.info }}</p>
    </div>
    <div class="price">
      <p>{{ car.price }} SEK</p>
    </div>
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
  align-items: flex-start;
  background: rgba($color: White, $alpha: .8);
  box-sizing: border-box;
  padding: .5rem;
  margin-bottom: .5rem;
  cursor: pointer;

  img {
    flex: 1;
    width: 200px;
  }

  .car-info {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: .5rem .5rem .5rem 1rem;

    h2 {
      margin: 0;
    }
    h3 {
      margin: 0;
      font-weight: normal;
      font-size: 1rem;
    }
    .info {
      font-style: italic;
      text-align: left;
      padding-right: 3rem;
    }
  }

  .price {
    align-self: flex-end;
    flex: 1;

    p {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
  }
}

</style>
