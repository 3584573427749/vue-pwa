import { createRouter, createWebHistory } from 'vue-router'
import { registerAuthGuard } from './guard'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/',
            component: () => import('@/views/HomeView.vue'),
            meta: { requiresAuth: true }
        }
    ]
})

registerAuthGuard(router)
