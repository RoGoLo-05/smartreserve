import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL de tu backend Laravel
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // si usas cookies o auth
})
