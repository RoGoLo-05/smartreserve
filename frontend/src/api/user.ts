import { api } from './axiosConfig'

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password })
  return response.data
}

export const getUser = async () => {
  const response = await api.get('/user')
  return response.data
}
