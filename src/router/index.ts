import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomePage.vue'
import AboutView from '../pages/AboutPage.vue'
import UsersPage from '../pages/UsersPage.vue'
import UserDetailPage from '../pages/UserDetailPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import SearchPage from '../pages/SearchPage.vue'
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
    ,
    {
        path: '/users',
        name: 'users',
        component: UsersPage
    },
    {
        path: '/users/:id',
        name: 'user-detail',
        component: UserDetailPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage
    },
    {
        path: '/search',
        name: 'search',
        component: SearchPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router