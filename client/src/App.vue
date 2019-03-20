<template>
  <div id="app">
    <div class="user">Logged in as: <b>{{ user.slice(0,1).toUpperCase() }}{{ user.slice(1) }}</b></div>
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/confirm">Confirm</router-link> |
      <router-link to="/bookings">Bookings</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <button class="logout" v-show="this.$store.state.currentUser != ''" @click="logout">Logout</button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('retrieveBookings')
    this.$store.dispatch('retrieveCars')
  },
  computed: {
    user(){
      return this.$store.state.currentUser;
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('authentic');
      this.$store.state.currentUser = '';
      this.$store.state.items = '';
      this.$store.state.backToConfirm = false
      this.$store.state.backToBookings = false
      this.$router.push('/')
    }
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
    .logout {
        width: 4rem;
        height: 1.5rem;
        background: #1b2530b9;
        padding: 0;
        border: none;
        border-radius: 10px;
        color: white;
        margin: .3rem;
    }
</style>
