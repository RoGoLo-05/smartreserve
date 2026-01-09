<template>
  <nav class="bg-blue-600 text-white p-4 flex justify-between">
    <div class="font-bold">SmartReserve</div>
    <ul class="flex gap-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavbar'
}
</script>


<style scoped>
a { text-decoration: none; color: white; }
a.router-link-exact-active { font-weight: bold; text-decoration: underline; }
</style>
