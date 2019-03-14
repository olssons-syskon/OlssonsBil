<template>
    <main id="login">
        <article>
            <section class="login-inputs">
                <div>Username:</div>
                <input type="text" name="" id="" class="login-input-username" v-model="username">
                <input type="password" name="" id="" class="login-input-username" v-model="password">
                <a href="#" class="btn" @click="login" :class="{ ready : validPassword && validUsername }">Login</a>
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
            validUsername: true,
            validPassword: true
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
            if(val.length > 4) {
                console.log("Cheese user")
                this.validUsername = true;
            } else {
                console.log("No cheese user")
                this.validUsername = false;
            }
        },
        password(val) {
            if(val.length > 4) {
                console.log("Hat password")
                this.validPassword = true;
            } else {
                console.log("No hat password")
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
