<template>
    <main id="login">
        <article>
            <section class="login-inputs">
                <div>Username:</div>
                <input type="text" class="login-input-username" v-model="username">
                <div>Password:</div>
                <input type="password" class="login-input-password" v-model="password">
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
            username: 'hank',
            password: 'hank',
            validUsername: false,
            validPassword: false
        }
    },
    methods: {
        login() {
            if(this.validUsername && this.validPassword) {
                this.$store.dispatch('login', {username: this.username, password: this.password});
                this.$router.push('/admin');
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

<style>
    .login-inputs {
        width: 100px;
        height: 200px;
        background: rgb(120, 120, 250);
    }

</style>
