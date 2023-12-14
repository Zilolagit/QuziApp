import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/auth/LoginView.vue")
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("@/views/auth/SignUp.vue")
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import("@/views/auth/LoginView.vue")
    },
    {
      path: '/ranking',
      name: 'logout',
      component: () => import("@/views/RankingView.vue")
    },
  ]
})

export default router
