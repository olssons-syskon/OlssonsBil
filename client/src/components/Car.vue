<template>
  <section id="car">

    <h3>{{ car.car }}</h3>
    <p>{{ car.booker }}</p>

    <h3>{{ car.name }}</h3>
    <p>{{ car.model }}</p>
    <h4>{{ car.price }}</h4>
  </section>
</template>

<script>
export default {
  name: 'car',
  props: ['car']
}
</script>

<style lang="scss">

#car {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: WhiteSmoke;
  box-sizing: border-box;
  padding: .5rem;
  margin-bottom: .25rem;

  h3 {
    margin: .25rem 0;
  }
  p {
    margin: .25rem 0;
  }
  h4 {
    margin: .25rem 0;
    align-self: flex-end;
  }
}

</style>
