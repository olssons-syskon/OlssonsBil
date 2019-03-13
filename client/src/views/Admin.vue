<template>
  <main id="admin">
    <CarList />
    <AdminCreate />
  </main>
</template>

<script>
import AdminCreate from '../components/AdminCreate'
import CarList from '../components/CarList'

export default {
  name: 'admin',
  components: {
    AdminCreate,
    CarList  }
}
</script>

<style lang="scss">

</style>
