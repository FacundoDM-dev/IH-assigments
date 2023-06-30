import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EjercicioPinia from '../views/EjercicioPinia.vue'
import EjercicioPinia2 from '../views/EjercicioPinia2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ejercicio-pinia',
      name: 'ejercicio-pinia',
      component: EjercicioPinia
    },
    {
      path: '/ejercicio-pinia2',
      name: 'ejercicio-pinia2',
      component: EjercicioPinia2
    }
  ]
})

export default router
