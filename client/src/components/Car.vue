<template>
  <section id="car">
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
  background: WhiteSmoke;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
