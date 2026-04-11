import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomePage.vue'
import AboutView from '../pages/AboutPage.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router