import { mount } from '@vue/test-utils'
import Counter from '@/components/vue-utils/Counter.vue'

describe('Counter - acceso a instancia', () => {
    it('permite acceder y modificar el estado interno mediante vm', async () => {
        const wrapper = mount(Counter)

        // acceso directo a la instancia
        const vm = wrapper.vm as any

        // modificar estado interno
        vm.count = 5
        await wrapper.vm.$nextTick()

        expect(wrapper.get('[data-test="count"]').text()).toBe('5')
    })

    it('ejecuta métodos internos directamente', async () => {
        const wrapper = mount(Counter)

        const vm = wrapper.vm as any

        vm.increment()
        await wrapper.vm.$nextTick()

        expect(wrapper.get('[data-test="count"]').text()).toBe('1')
    })
})