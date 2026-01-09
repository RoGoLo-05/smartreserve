type User = { id: number; name: string; role: string } | null

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User
  }),
  actions: {
    setUser(userData: Exclude<User, null>) {
      this.user = userData
    },
    logout() {
      this.user = null
    }
  }
})
