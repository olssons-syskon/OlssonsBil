<template>
  <article class="search">
    <h1>Olssons biluthyrning</h1>
    <h2>When???</h2>
    <div class="calendars">
      <date-pick v-model="startDate"></date-pick>
      <h3>till</h3>
      <date-pick v-model="endDate"></date-pick>
    </div>
  </article>
</template>

<script>

import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'search',
  components: {
    DatePick
  },
  data() {
    return {
      startDate: '2019-01-01',
      endDate: '2019-04-30'
    }
  }
}

// https://dbrekalo.github.io/vue-date-pick/getting-started.html

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat');

%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

:root {
  background: Azure;
}

.search {
  h1 {
    font-size: 3rem;
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
        padding: .8rem;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 1rem;
      }

      .vdpClearInput {
        display: none;
      }
    }

  }
}

</style>
