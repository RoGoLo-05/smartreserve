import { api } from './axiosConfig'

export type Booking = {
  id?: number
  user_id: number
  employee_id: number
  service_id: number
  date: string
  time: string
}

export const createBooking = async (data: Booking) => {
  const response = await api.post('/bookings', data)
  return response.data as Booking
}

export const getBookings = async (): Promise<Booking[]> => {
  const response = await api.get('/bookings')
  return response.data as Booking[]
}
