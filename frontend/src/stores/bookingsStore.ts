import { defineStore } from 'pinia'
import type { Booking } from '../api/bookings'
import { getBookings, createBooking } from '../api/bookings'

export const useBookingsStore = defineStore('bookings', {
  state: () => ({
    bookings: [] as Booking[]
  }),
  actions: {
    async fetchBookings() {
      this.bookings = await getBookings()
    },
    async addBooking(data: Booking) {
      const newBooking = await createBooking(data)
      this.bookings.push(newBooking)
    }
  }
})
