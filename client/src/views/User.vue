<template>
<main class="user">
    <Login />
    <router-view />
</main>

</template>

<script>
import Login from '../components/Login.vue'
export default {
    name: 'user',
    components: {
        Login
    },
    beforeMount() {
        if(this.$store.state.currentUser != '') {
            this.$router.push('/')
        }
    }

}
</script>

<style>

</style>
