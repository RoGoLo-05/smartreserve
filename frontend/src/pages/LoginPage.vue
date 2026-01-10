<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button>Entrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const password = ref("")

const handleLogin = () => {
  alert(`Login con ${email.value} / ${password.value}`)
}
</script>
