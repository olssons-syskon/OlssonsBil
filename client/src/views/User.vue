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
    }

}
</script>

<style>

</style>
