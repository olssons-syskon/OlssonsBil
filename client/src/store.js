import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookings: [],
    cars: []
  },
  mutations: {
    setBookings(state, bookings) {
      state.bookings = bookings
    },
    setCars(state, cars) {
      state.cars = cars
    }
  },
  actions: {
    async createCar(ctx, car) {
      let c = await axios.post('http://localhost:3000/cars', car)
    },
    async createBooking(ctx, booking) {
      let book = await axios.post('http://localhost:3000/booking/', booking);
      localStorage.setItem('booking', booking)
    },
    async retrieveBookings(ctx) {
      let bookings = await axios.get('http://localhost:3000/booking');
      ctx.commit('setBookings', bookings);
    },
    async retrieveCars(ctx) {
      let cars = await axios.get('http://localhost:3000/cars');
      ctx.commit('setCars', cars.data);
    }
  },
  getters: {
    getBookings(state) {
      return state.bookings;
    },
    getCars(state) {
      return state.cars;
    }
  }
})