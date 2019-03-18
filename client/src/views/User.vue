<template>
  <main id="user">
    <section class="user">
      <Login />
      <CreateUser />
    </section>
  </main>
</template>

<script>
import Login from '../components/Login.vue'
import CreateUser from '../components/CreateUser.vue'
export default {
    name: 'user',
    components: {
        Login,
        CreateUser
    }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

#user {
  margin: 3rem 0;

  .user {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
    width: 60vw;
    margin: auto;

    h2 {
      margin: 1rem;
    }

    .login-inputs, .create-user-inputs {
      background: Linen;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        font-family: 'Montserrat';
        margin-left: .25rem;
        color: #010;
      }
      input {
        font-size: 1.2rem;
        padding: .25rem;
        margin: .25rem;
        border: none;
        border-radius: 3px;
        background: rgba($color: WhiteSmoke, $alpha: .8);
      }
      .btn {
        align-self: center;
        padding: 1rem 3rem;
      }
    }
  }
}

</style>
