import type { RouteRecordRaw } from 'vue-router'

const ProfilePage = () => import('./pages/ProfilePage.vue')
const ProfileSettingsPage = () => import('./pages/ProfileSettingsPage.vue')
const ProfileOrdersPage = () => import('./pages/ProfileOrdersPage.vue')

export const profileRoutes: RouteRecordRaw = {
    path: '/profile',
    component: ProfilePage,
    children: [
        {
            path: '',
            redirect: { name: 'profile-settings' }
        },
        {
            path: 'settings',
            name: 'profile-settings',
            component: ProfileSettingsPage
        },
        {
            path: 'orders',
            name: 'profile-orders',
            component: ProfileOrdersPage
        }
    ]
}