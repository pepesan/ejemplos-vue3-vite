import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NavLink from '@/components/vue-utils/NavLink.vue'

const routes = [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/about', component: { template: '<div>About</div>' } },
]

describe('NavLink - router', () => {
    it('renderiza correctamente el router-link', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes,
        })

        const wrapper = mount(NavLink, {
            global: {
                plugins: [router],
            },
        })

        await router.isReady()

        const link = wrapper.get('[data-test="link"]')
        expect(link.text()).toBe('Ir a About')
    })

    it('navega al hacer click', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes,
        })

        const wrapper = mount(NavLink, {
            global: {
                plugins: [router],
            },
        })

        await router.isReady()

        const link = wrapper.get('[data-test="link"]')
        await link.trigger('click')

        // 🔑 clave: esperar al router
        await new Promise(resolve => setTimeout(resolve))

        expect(router.currentRoute.value.path).toBe('/about')
    })
})