<template>
  <aside class="w-64 bg-gray-100 p-4 min-h-screen">
    <ul class="flex flex-col gap-2">
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/bookings">Bookings</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/employees">Employees</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </aside>
</template>

<script lang="ts">
export default { 
    name: 'AppSidebar' 
}
</script>
