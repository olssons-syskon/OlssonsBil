<template>
  <main id="admin">
    <CarList/>
    <AdminCreate/>
  </main>
</template>

<script>
import AdminCreate from "../components/AdminCreate";
import CarList from "../components/CarList";

export default {
  name: "admin",
  components: {
    AdminCreate,
    CarList
  },
  beforeMount() {

    if(this.$store.getters.getItems === ""){
      this.$router.push("user");
    } else if(this.$store.getters.getCurrentUser !== "" && this.$store.getters.getItems !== 'admin') {
      this.$router.push("/");
    }

    this.$store.dispatch("retrieveCars");
  }
};
</script>

<style lang="scss">
</style>
