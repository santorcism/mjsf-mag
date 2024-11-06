

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from "@/composables/useAuth";
import LoginView from "@/views/LoginView.vue";
import RegisterView from '@/views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/ToDoView.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        requiresAuth: false
      }
    },
  ]
})
router.beforeEach((to) => {
  const { userState } = useAuth()
  console.log(userState);
  if ( to.meta.requiresAuth && ! userState.authorized )  {
    return { name: 'login' };
  }
  if ( (to.name == 'login' || to.name == 'register') && userState.authorized ) {
    return { name: 'home' }
  }
  return true;
})
export default router
