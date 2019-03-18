import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookings: [],
    cars: [],
    startDate: '',
    endDate: '',
    choosenCar: {},
    eChosenCar: {
      name: "Volvo",
      model: "test",
      color: "test",
      price: "test",
      bookable: true
    },
    currentUser: '',
    apiUrl: 'http://localhost:3000',
    items: '',
    // antal dagar i bokningen
    days: 0
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
      // antal dagar bokningen är på
      let start = Date.parse(state.startDate);
      let end = Date.parse(state.endDate);
      let timeDiff = end - start;
      state.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    },
    toggleRejected(state) {
      state.rejected = !state.rejected;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setChosenCar(state, car) {
      state.eChosenCar = car;
    },
    setItems(state, items) {
      state.items = items
    }
  },
  actions: {
    async createCar(ctx, car) {
      await axios.post("http://localhost:3000/cars", car);
    },
    async createUser(ctx, user) {
      console.log(user)
      await axios.post('http://localhost:3000/users', user)
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
    async editCar(ctx, data) {
      await axios.patch(`http://localhost:3000/cars/`, data);

    },
    async cancelBooking(ctx, id) {
      console.log(id);
      await axios.delete(`http://localhost:3000/booking/${id}`);
    },
    async login(ctx, loginData) {
      try {
        let token = await axios.post(`${ctx.state.apiUrl}/auth`, loginData);
        sessionStorage.setItem("authentic", token.data.authToken);

        console.log(token)

        await ctx.commit("setCurrentUser", token.data.username);

        await ctx.dispatch("getItems");

      } catch (err) {
        ctx.commit("toggleRejected");
        setTimeout(() => {
          ctx.commit("toggleRejected");
        }, 1000);

        console.error(err);
      }
    },
    async getItems(ctx) {
      let opt = await {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authentic")}`
        }
      };
      let items = await axios.get(`${ctx.state.apiUrl}/adminItems`, opt);

      console.log('rghjk' +items.data)
      await ctx.commit('setItems', items.data)
    }
  },
  getters: {
    getBookings(state) {
      return state.bookings;
    },
    getCars(state) {
      return state.cars;
    },
    getChosenCar(state){
      return state.eChosenCar;
    },
    getCurrentUser(state) {
      return state.currentUser;
    },
    getItems(state){
      return state.items;
    },
  }
});
