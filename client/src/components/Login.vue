<template>
    <main id="login">
        <article>
            <section class="login-inputs">
                <h4>Username:</h4>
                <input type="text" class="login-input-username" v-model="username" autofocus>
                <h4>Password:</h4>
                <input type="password" class="login-input-password" v-model="password" @keyup.enter="login">
                <a href="#" class="btn" @click="login">Login</a>
                <a href="#" class="btn" @click="openCreateUser()">New User</a>
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
                await this.$store.dispatch('login', {username: this.username, password: this.password});
                this.$router.push('admin');
            }
        },
        openCreateUser() {
            this.$router.push(`/create-user`)
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

    h4 {
        margin-top: .5rem;
        text-shadow: 1px 1px #000;
        color: #839eb9;
    }
    .login-inputs {
        margin: 10rem 0 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input {
            border-radius: 10px;
            padding-left: 5px;
        }
    }
    .btn {
        width: 4rem;
        height: 1.5rem;
        background: #1b2530b9;
        padding: 3px 0 0;
    }

</style>
