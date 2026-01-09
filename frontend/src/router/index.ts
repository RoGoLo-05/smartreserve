import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  { path: '/', component: () => import('../pages/HomePage.vue') },
  { path: '/login', component: () => import('../pages/Login.vue') },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: () => import('../pages/Dashboard.vue') },
      { path: 'bookings', component: () => import('../pages/Bookings.vue') },
      { path: 'services', component: () => import('../pages/Services.vue') },
      { path: 'employees', component: () => import('../pages/Employees.vue') },
      { path: 'profile', component: () => import('../pages/Profile.vue') },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
