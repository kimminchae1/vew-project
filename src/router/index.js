import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/Guide.vue'),
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue'),
    },
  ],
})

export default router
