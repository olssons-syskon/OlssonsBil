<template>
  <article class="search">
    <h1>Olssons biluthyrning</h1>
    <h2>When?</h2>
    <div class="calendars" @click="hideError">
      <date-pick v-model="startDate"></date-pick>
      <h2>to</h2>
      <date-pick v-model="endDate"></date-pick>
    </div>
    <a href="#" class="btn" @click="searchCars(startDate, endDate)">Find me a car!</a>
    <p class="errorMsg" v-show="noDate">I need a date. Please date me.</p>
    <p class="errorMsg" v-show="invalidDate">Invalid dates.</p>
  </article>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  name: "search",
  components: {
    DatePick
  },
  data() {
    return {
      startDate: "2019-03-10",
      endDate: "2019-03-20",
      noDate: false,
      invalidDate: false
    };
  },
  methods: {
    hideError() {
      this.noDate = false;
      this.invalidDate = false;
    },
    async searchCars(from, to) {
      if (from == "" || to == "") {
        this.noDate = true;
      } else if (from > to || from == to) {
        this.invalidDate = true;
      } else {
        await this.$store.dispatch("retrieveCars");
        this.$store.commit("changeStart", from);
        this.$store.commit("changeEnd", to);
        this.$router.push(`/choose-car`);
      }
    },
    setDate() {
    let year = new Date().getUTCFullYear();
    let month = new Date().getUTCMonth() + 1;
    let day = new Date().getUTCDate();
    if (month < 10 && day < 10) {
      this.startDate = year + "-" + "0" + month + "-" + "0" + day;
      this.endDate = year + "-" + "0" + month + "-" + "0" + day;
      this.$store.commit('setTodaysDate', this.startDate);
    } else if (month >= 10 && day < 10) {
      this.startDate = year + "-" + month + "-" + "0" + day;
      this.endDate = year + "-" + month + "-" + "0" + day;
      this.$store.commit('setTodaysDate', this.startDate);
    } else if (month < 10 && day >= 10) {
      this.startDate = year + "-" + "0" + month + "-" + day;
      this.endDate = year + "-" + "0" + month + "-" + day;
      this.$store.commit('setTodaysDate', this.startDate); 
    } else {
      this.startDate = year + "-" + month + "-" + day;
      this.endDate = year + "-" + month + "-" + day;
      this.$store.commit('setTodaysDate', this.startDate); 
    }
    }
  },
  beforeMount() {
    this.setDate()
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.search {
  h1 {
    font-size: 3rem;
  }
  h2 {
    margin: 1rem 0;
  }

  .calendars {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    margin: auto;

    .vdpComponent {
      input {
        width: 5.5rem;
        padding: 0.8rem;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 1rem;
      }
      .vdpClearInput {
        display: none;
      }
    }
  }

  .errorMsg {
    color: Crimson;
    font-style: italic;
    margin: 0;
  }
}
</style>
