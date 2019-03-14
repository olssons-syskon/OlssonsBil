<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/confirm">Confirm</router-link> |
      <router-link to="/bookings">Bookings</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('retrieveBookings')
    this.$store.dispatch('retrieveCars')
  }
}

</script>

<style>

@import './scss/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
