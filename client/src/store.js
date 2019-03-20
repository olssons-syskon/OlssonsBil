import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authOptions: {
      params: {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authentic")}`
        }
      }
    },
    bookings: [],
    cars: [],
    todaysDate: '',
    startDate: '',
    endDate: '',
    choosenCar: {},
    eChosenCar: {
      name: "test",
      model: "test",
      color: "test",
      price: "test",
      bookable: true
    },
    currentUser: '',
    apiUrl: 'http://localhost:3000',
    items: '',
    nameNotInUse: true,
    usernameInUseMessage: 'Username',
    backToConfirm: false,
    backToBookings: false,
    // antal dagar i bokningen
    days: 0,
    // alla dagar i bokningen
    dates: []
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
    },
    setTodaysDate(state, date) {
      state.todaysDate = date
    },
    setAllDates(state, dates) {
      state.dates = dates;
    },
  },
  actions: {
    ///
    async getAllDates(ctx, date) {
      Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
      }

      function getDates(startDate, stopDate) {
         var dateArray = new Array();
         var currentDate = startDate;
         while (currentDate <= stopDate) {
           dateArray.push(currentDate)
           currentDate = currentDate.addDays(1);
         }
         return dateArray;
       }

      let allDates = [];
      var dateArray = getDates(new Date(date.from), (new Date(date.to)));
      for (var i = 0; i < dateArray.length; i ++ ) {
        let m = dateArray[i].getMonth() + 1;
        let month = m;
        if (m < 10) {
          month = "0" + m.toString();
        }
        let date = dateArray[i].getFullYear().toString() + "-" + month + "-" + dateArray[i].getDate().toString()
        allDates.push(date)
      }
      ctx.commit("setAllDates", allDates)
      ///
    },
    async createCar(ctx, car) {
      await axios.post("http://localhost:3000/cars", car);
    },
    async createUser(ctx, user) {
      let newUser = await axios.post('http://localhost:3000/users', user)
      if(!newUser.data.notInUse) {
        ctx.state.nameNotInUse = false
        ctx.state.usernameInUseMessage = newUser.data.message
      } else {
        ctx.state.nameNotInUse = true
      }
    },
    async createBooking(ctx, booking) {
      await axios.post("http://localhost:3000/booking/", booking, ctx.state.authOptions);
    },
    async retrieveBookings(ctx) {
      let bookings = await axios.get("http://localhost:3000/booking");
      await ctx.commit("setBookings", bookings.data);
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
      try{
        await axios.delete(`http://localhost:3000/booking/${id}`);
        ctx.dispatch('retrieveBookings')
      } catch(err) {
        console.error(err)
      }
    },
    async login(ctx, loginData) {
      try {
        let token = await axios.post(`${ctx.state.apiUrl}/auth`, loginData);
        console.log(token)
        sessionStorage.setItem("authentic", token.data.authToken);

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

      await ctx.commit('setItems', items.data)
    }
  },
  getters: {
    getBookings(state) {
      return state.bookings;
    },
    getFinishedBookings(state){
      let bookings = state.bookings;
      let today = (Date.now()/1000).toFixed();

      return bookings.filter(booking => (new Date(booking.dates[booking.dates.length-1]).getUnixTime()).toFixed() < today )
    },
    getBookingsByLastDate(state) {
      let bookings = state.bookings;
      let today = (Date.now()/1000).toFixed();

      return bookings.filter(booking => (new Date(booking.dates[booking.dates.length-1]).getUnixTime()).toFixed() >= today)
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
    getTodaysDate(state) {
      return state.todaysDate;
    }
  }
});
