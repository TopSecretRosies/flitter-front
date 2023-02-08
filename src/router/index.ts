import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authRouter from '../modules/auth/router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/config',
    name: 'config',
    component: () => 
      import(/* webpackChunkName: "config" */ '../views/ConfigView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => 
      import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
 
  {
    path: '/auth',
    ...authRouter
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
