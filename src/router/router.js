import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/home/Home.vue') },
    { path: '/customer', name: 'customer', component: () => import('../views/customer/Customer.vue') },
    { path: "/404", redirect: "/error" },
  ]
})

export default router
