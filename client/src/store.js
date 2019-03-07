import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookings: []
  },
  mutations: {
    setBookings(state, bookings) {
      state.bookings = bookings
    }
  },
  actions: {
    async createBooking(ctx, booking) {
      let book = await axios.post('http://localhost:3000/booking/', booking);
      localStorage.setItem('booking', booking)
    },
    async retrieveBookings(ctx) {
      let bookings = await axios.get('http://localhost:3000/booking');
      ctx.commit('setBookings', bookings);
    }
  },
  getters: {
    getBookings(state) {
      return state.bookings;
    }
  }
})