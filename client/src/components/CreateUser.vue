<template>
  <article class="create-user">
    <h2>or sign up?</h2>
    <section class="create-user-inputs">
      <h4>Username:</h4>
      <input type="text" v-model="newUserName"/>
      <h4>Password:</h4>
      <input type="password" v-model="newUserPassword"/>
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

</style>
