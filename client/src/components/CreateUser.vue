<template>
    <article class="create-user">
        <h2>or sign up?</h2>
        <section class="create-user-inputs">
            <p v-show="usernameInUse">{{usernameInUseMessage}}</p>
            <h4>Username:</h4>
            <input v-model="newUserName"/>
            <h4>Password:</h4>
            <input type="password" v-model="newUserPassword" @keyup.enter="createUser()"/>
            <a href="#" class="btn" @click="createUser">Create</a>
        </section>
    </article>
</template>

<script>
export default {
    name: 'createUser',
    data() {
        return {
            newUserName: '',
            newUserPassword: '',
            role: 'user',
            usernameInUse: false
        }
    },
    computed: {
        usernameInUseMessage() {
            return this.$store.state.usernameInUseMessage
        }
    },
    methods: {
       async createUser() {
           await this.$store.dispatch('createUser', {username: this.newUserName.toLowerCase(), password: this.newUserPassword, role: this.role});
           if(this.$store.state.nameNotInUse == false) {
               this.usernameInUse = true;
           } else {
            this.newUserName = ''
            this.newUserPassword = '' 
           }
        }
    }
  }

</script>

<style lang='scss'>

</style>
