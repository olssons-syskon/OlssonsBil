import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookings: [],
    cars: [],
    startDate: "",
    endDate: "",
    rejected: false,
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
    },
    toggleRejected(state) {
      state.rejected = !state.rejected;
    },
    setCurrentUser(state, user) {
      state.activeUser = user;
    }
  },
  actions: {
    async createCar(ctx, car) {
      await axios.post("http://localhost:3000/cars", car);
    },
    async createBooking(ctx, booking) {
      await axios.post("http://localhost:3000/booking/", booking);
      // localStorage.setItem('booking'+ctx.state.bookings, JSON.stringify(booking))
    },
    async retrieveBookings(ctx) {
      let bookings = await axios.get("http://localhost:3000/booking");
      ctx.commit("setBookings", bookings.data);
    },
    async retrieveCars(ctx) {
      let cars = await axios.get("http://localhost:3000/cars");
      ctx.commit("setCars", cars.data);
    },
    async deleteCar(ctx, id) {
      await axios.delete(`http://localhost:3000/cars/${id}`);
    },
    async editCar(ctx, id) {
      await axios.put(`http://localhost:3000/cars/${id}`);
      ctx.commit("setCars", cars.data);
    },
    async cancelBooking(ctx, id) {
      console.log(id);
      await axios.delete(`http://localhost:3000/booking/${id}`);
    },
    async login(ctx, loginData) {
      try {
        let token = await axios.post(`http://localhost:3000/auth`, loginData);

        sessionStorage.setItem("authentic", token.data.authentification);

        ctx.commit("setCurrentUser", token.data.username);

        ctx.dispatch("getItems");
      } catch (err) {
        ctx.commit("toggleRejected");
        setTimeout(() => {
          ctx.commit("toggleRejected");
        }, 1000);

        console.error(err);
      }
    },
    async getItems(ctx) {
      let opt = {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authentic")}`
        }
      };
      let items = await axios.get(`${ctx.state.apiUrl}/items`, opt);
      console.log(items);
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
});
