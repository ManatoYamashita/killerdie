import { createRouter, createWebHistory } from 'vue-router'
import Window1 from '../views/Window1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'w1',
      component: Window1
    },
    {
      path: '/w2',
      name: 'w2',
      component: () => import('../views/Window2View.vue')
    },
    {
      path: '/w3',
      name: 'w3',
      component: () => import('../views/Window3View.vue')
    },
    {
      path: '/w4',
      name: 'w4',
      component: () => import('../views/Window4View.vue')
    },
    {
      path: '/w5',
      name: 'w5',
      component: () => import('../views/Window5View.vue')
    },
    {
      path: '/w6',
      name: 'w6',
      component: () => import('../views/Window6View.vue')
    }
  ]
})

export default router
