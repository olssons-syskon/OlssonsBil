<template>
    <article class="create-user">
        <section class="create-user-inputs">
            <input placeholder="Username" v-model="newUserName"/>
            <input type="password" placeholder="Password" v-model="newUserPassword"/>
            <a href="#" class="btn" @click="createUser()">Create</a>
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
            role: 'user'
        }
    },
    methods: {
       async createUser() {
           await this.$store.dispatch('createUser', {username: this.newUserName, password: this.newUserPassword, role: this.role});
            this.newUserName = ''
            this.newUserPassword = '' 
        }
    }

}
</script>

<style lang='scss'>
.create-user-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            margin-bottom: 2rem;
            border-radius: 10px;
            padding-left: 5px;
        }
}

</style>
