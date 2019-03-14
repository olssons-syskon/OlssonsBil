import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookings: [],
    cars: [],
    startDate: '',
    endDate: '',
    choosenCar: {}
  },
  mutations: {
    setBookings(state, bookings) {
      state.bookings = bookings;
    },
    setCars(state, cars) {
      state.cars = cars;
    },
    changeStart(state, from) {
      state.startDate = from;
    },
    changeEnd(state, to) {
      state.endDate = to;
    },
    selectCar(state, car) {
      state.choosenCar = car;
    }
  },
  actions: {
    async createCar(ctx, car) {
      await axios.post('http://localhost:3000/cars', car)
    },
    async createBooking(ctx, booking) {
      await axios.post('http://localhost:3000/booking/', booking);
      // localStorage.setItem('booking'+ctx.state.bookings, JSON.stringify(booking))
    },
    async retrieveBookings(ctx) {
      let bookings = await axios.get('http://localhost:3000/booking');
      ctx.commit('setBookings', bookings.data);
    },
    async retrieveCars(ctx) {
      let cars = await axios.get('http://localhost:3000/cars');
      ctx.commit('setCars', cars.data);    
    },
    async deleteCar(ctx, id){
      await axios.delete(`http://localhost:3000/cars/${id}`)
    },
    async editCar(ctx, id) {
      await axios.put(`http://localhost:3000/cars/${id}`);
      ctx.commit('setCars', cars.data)
    },
    async cancelBooking(ctx, id) {
      console.log(id)
      await axios.delete('http://localhost:3000/booking/', id);
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
