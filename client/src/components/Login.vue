<template>
  <main id="login">
    <article>
      <h2>Sign in</h2>
      <section class="login-inputs">
        <h4>Username:</h4>
        <input type="text" class="login-input-username" v-model="username" autofocus>
        <h4>Password:</h4>
        <input type="password" class="login-input-password" v-model="password" @keyup.enter="login">
        <a href="#" class="btn" @click="login">Login</a>
      </section>
    </article>
  </main>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            validUsername: false,
            validPassword: false
        }
    },
    methods: {
        async login() {
            if(this.validUsername && this.validPassword) {
                await this.$store.dispatch('login', {username: this.username.toLowerCase(), password: this.password});
                if(this.$store.state.backToConfirm == true) {
                    this.$router.push('confirm');
                } else if(this.$store.state.backToBookings == true) {
                    this.$router.push('bookings');
                } else {
                    this.$router.push('admin');
                }
            }
        }
    },
    watch: {
        username(val) {
            if(val.length > 3) {
                this.validUsername = true;
            } else {
                this.validUsername = false;
            }
        },
        password(val) {
            if(val.length > 3) {
                this.validPassword = true;
            } else {
                this.validPassword = false;
            }
        }
    },
    computed: {
        rejected() {
            return this.$store.state.rejected;
        }
    }
}
</script>

<style lang='scss'>

</style>
