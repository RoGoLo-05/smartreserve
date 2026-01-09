<template>
  <div>
    <AppNavbar />
    <div class="flex">
      <AppSidebar v-if="showSidebar"/>
      <main class="flex-1 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue'
import AppSidebar from '../components/AppSidebar.vue'

const showSidebar = true // más adelante controlar según rol
</script>
