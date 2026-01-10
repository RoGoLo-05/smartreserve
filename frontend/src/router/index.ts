import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

// Rutas públicas (no requieren login)
const publicRoutes = [
  { path: '/', component: () => import('../pages/HomePage.vue') },
  { path: '/login', component: () => import('../pages/LoginPage.vue') },
]

// Rutas con layout (requieren login)
const privateRoutes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: () => import('../pages/DashboardPage.vue') },
      //{ path: 'bookings', component: () => import('../pages/Bookings.vue') },
      //{ path: 'services', component: () => import('../pages/Services.vue') },
      //{ path: 'employees', component: () => import('../pages/Employees.vue') },
      //{ path: 'profile', component: () => import('../pages/Profile.vue') },
    ]
  }
]

const routes = [...publicRoutes, ...privateRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
