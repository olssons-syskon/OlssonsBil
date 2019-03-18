<template>
  <div class="edit">
    <header>
      <h1>Update data about the car</h1>
    </header>
    <div class="form">
      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.name">
        <span class="a-field__label-wrap">
          <span class="a-field__label">Brand</span>
        </span>
      </label>
      <br>

      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.model">
        <span class="a-field__label-wrap">
          <span class="a-field__label">Model</span>
        </span>
      </label>
      <br>

      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.color">
        <span class="a-field__label-wrap">
          <span class="a-field__label">Color</span>
        </span>
      </label>
      <br>
      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.price">
        <span class="a-field__label-wrap">
          <span class="a-field__label">Price</span>
        </span>
      </label>
      <br>
      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.bookable">
        <span class="a-field__label-wrap">
          <span class="a-field__label">If bookable?</span>
        </span>
      </label>
      <br>
      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.booked.from">
        <span class="a-field__label-wrap">
          <span class="a-field__label">If booked from</span>
        </span>
      </label>
      <br>
      <label class="field a-field a-field_a1 page__field">
        <input class="field__input a-field__input" required v-model="eCar.booked.to">
        <span class="a-field__label-wrap">
          <span class="a-field__label">Is booked to</span>
        </span>
      </label>

      <section>
        <button class="btn" @click="editCar(eCar)">Update data</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {
        name: "",
        model: "",
        color: "",
        price: "",
        color: "",
        bookable: true
        /*    booked: {
          from: '2000-01-01',
          to: '2000-01-01'
        } */
      }
    };
  },
  beforeMount() {
    console.log(this.eCar);
  },
  computed: {
    eCar() {
      return this.$store.getters.getChosenCar;
      //return this.$route.params.data
    }
  },
  methods: {
    editCar(data) {
      //var id = this.$route.params.id;
      //name = this.$route.params.name
      //console.log(id);
      this.$store.dispatch("editCar", data);
      console.log("dispatched editCar");

      this.$store.dispatch("retrieveCars");
      console.log("dispatched retrieveCars");
      this.$router.push(`/admin`);
      this.$store.dispatch("retrieveCars");
    }
  }
};
</script>
<style type="scss">
h1 {
  color: brown;
}
h3 {
  text-align: center;
}
/* .form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
  background-color: #EDE3E3;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
} */

.edit {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
  max-width: 960px;
  margin: 0 auto;
  grid-template-areas:
    "header"
    "section"
    "section"
    "section"
    "section"
    "section"
    "section"
    "section"
    "section"
    "section";
}

@media screen and (min-width: 760px) {
  #edit {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 10px;
    max-width: 960px;
    margin: 0 auto;
    grid-template-areas:
      "header"
      "section"
      "section"
      "section"
      "section"
      "section"
      "section"
      "section"
      "section"
      "section";
  }
}

#content > * {
  background: wheat;
  padding: 30px;
}

header {
  grid-area: header;
}

section {
  grid-area: section;
}

/*
P.S: if you like my content maybe you will become a donator and donate some money? That helps me to create new awesome materials. https://www.paypal.me/melnik909
*/

/*
=====
LEVEL 1. RESET STYLES
=====
*/

.field {
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
}

.field__input {
  background-color: transparent;
  border-radius: 0;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: 1em;
}

.field__input:focus::-webkit-input-placeholder {
  color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder {
  color: var(--uiFieldPlaceholderColor);
  opacity: 1;
}

/*
=====
LEVEL 2. CORE STYLES
=====
*/

.a-field {
  display: inline-block;
}

.a-field__input {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.a-field__input:focus {
  outline: none;
}

/*
=====
LEVEL 3. PRESENTATION STYLES
=====
*/

/* a-field */

.a-field {
  --uiFieldHeight: var(--fieldHeight, 40px);
  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
  --uiFieldBorderColor: var(--fieldBorderColor);

  --uiFieldFontSize: var(--fieldFontSize, 1em);
  --uiFieldHintFontSize: var(--fieldHintFontSize, 1em);

  --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
  --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
  --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);

  position: relative;
  box-sizing: border-box;
  font-size: var(--uiFieldFontSize);
  padding-top: 1em;
}

.a-field .a-field__input {
  height: var(--uiFieldHeight);
  padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);
}

.a-field .a-field__input::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.a-field .a-field__input::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.a-field
  .a-field__input:not(:placeholder-shown)
  ~ .a-field__label-wrap
  .a-field__label {
  opacity: 0;
  bottom: var(--uiFieldPaddingBottom);
}

.a-field .a-field__input:focus::-webkit-input-placeholder {
  opacity: 1;
  transition-delay: 0.2s;
}

.a-field .a-field__input:focus::-moz-placeholder {
  opacity: 1;
  transition-delay: 0.2s;
}

.a-field .a-field__label-wrap {
  box-sizing: border-box;
  width: 100%;
  height: var(--uiFieldHeight);

  pointer-events: none;
  cursor: text;

  position: absolute;
  bottom: 0;
  left: 0;
}

.a-field .a-field__label {
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  bottom: calc(50% - 0.5em);

  line-height: 1;
  font-size: var(--uiFieldHintFontSize);

  pointer-events: none;
  transition: bottom 0.2s cubic-bezier(0.9, -0.15, 0.1, 1.15),
    opacity 0.2s ease-out;
  will-change: bottom, opacity;
}

.a-field .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
  opacity: 1;
  bottom: var(--uiFieldHeight);
}

/* a-field_a1 */

.a-field_a1 .a-field__input {
  transition: border-color 0.2s ease-out;
  will-change: border-color;
}

.a-field_a1 .a-field__input:focus {
  border-color: var(--fieldBorderColorActive);
}

/* a-field_a2 */

.a-field_a2 .a-field__label-wrap:after {
  content: "";
  box-sizing: border-box;
  width: 0;
  height: var(--uiFieldBorderWidth);
  background-color: var(--fieldBorderColorActive);

  position: absolute;
  bottom: 0;
  left: 0;

  will-change: width;
  transition: width 0.285s ease-out;
}

.a-field_a2 .a-field__input:focus ~ .a-field__label-wrap:after {
  width: 100%;
}

/* a-field_a3 */

.a-field_a3 {
  padding-top: 1.5em;
}

.a-field_a3 .a-field__label-wrap:after {
  content: "";
  box-sizing: border-box;
  width: 100%;
  height: 0;

  opacity: 0;
  border: var(--uiFieldBorderWidth) solid var(--fieldBorderColorActive);

  position: absolute;
  bottom: 0;
  left: 0;

  will-change: opacity, height;
  transition: height 0.2s ease-out, opacity 0.2s ease-out;
}

.a-field_a3 .a-field__input:focus ~ .a-field__label-wrap:after {
  height: 100%;
  opacity: 1;
}

.a-field_a3 .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
  bottom: calc(var(--uiFieldHeight) + 0.5em);
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field {
  --fieldBorderColor: #d1c4e9;
  --fieldBorderColorActive: #673ab7;
}
</style>
