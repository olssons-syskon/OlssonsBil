import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookings: [],
    cars: [{
      name: "Volvo",
      model: "XC60",
      color: "red",
      price: 300,
      year: 2018,
      bookable: true,
      booked: false
    },
  {  name: "Toyota",
  model: "Camry",
  color: "black",
  price: 200,
  year: 2017,
  bookable: true,
  booked: false

  }]

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
    async retriveCars(ctx) {
      let cars = await axios.get('http://localhost:3000/cars');
      ctx.commit('setCars', cars.data);    
    },
    async deleteCar(ctx, id){
    
       await axios.delete(`http://localhost:3000/cars/${id}`)
      },

    async editCar(ctx, id) {
        await axios.put(`http://localhost:3000/cars/${id}`)
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