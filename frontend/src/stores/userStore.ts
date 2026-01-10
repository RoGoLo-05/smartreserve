import { defineStore } from 'pinia'
import { getUser, login } from '../api/user'

type User = { id: number; name: string; role: string } | null

export const useUserStore = defineStore('user', {
  state: () => ({ user: null as User }),
  actions: {
    async fetchUser() {
      this.user = await getUser()
    },
    async loginUser(email: string, password: string) {
      const data = await login(email, password)
      this.user = data.user
    },
    logout() {
      this.user = null
    }
  }
})
