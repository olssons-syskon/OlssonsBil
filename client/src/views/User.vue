<template>
  <main id="user">
    <section class="user">
      <Login/>
      <CreateUser/>
    </section>
  </main>
</template>

<script>
import Login from "../components/Login.vue";
import CreateUser from "../components/CreateUser.vue";
export default {
  name: "user",
  components: {
    Login,
    CreateUser
  },
  beforeMount() {
    if (this.$store.state.currentUser != "") {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

#user {
  margin-top: 20vh;

  .user {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 50vw;
    margin: auto;

    h2 {
      margin: 1rem;
    }

    .login-inputs,
    .create-user-inputs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 0.5rem;

      h4 {
        font-family: "Montserrat";
        margin-left: 0.25rem;
        color: #010;
      }
      input {
        font-size: 1.2rem;
        padding: 0.25rem;
        margin: 0.25rem;
        border: none;
        border-radius: 3px;
        width: auto;
        background: rgba($color: WhiteSmoke, $alpha: 0.8);
      }
      .btn {
        align-self: center;
        padding: 1rem 3rem;
      }
    }
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
