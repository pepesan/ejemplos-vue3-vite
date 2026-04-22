import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import CounterWithStore from '@/components/vue-utils/CounterWithStore.vue'

describe('CounterWithStore - pinia', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('muestra el estado inicial del store', () => {
        const wrapper = mount(CounterWithStore, {
            global: {
                plugins: [createPinia()],
            },
        })

        expect(wrapper.get('[data-test="count"]').text()).toBe('0')
    })

    it('actualiza el contador del store al hacer click', async () => {
        const wrapper = mount(CounterWithStore, {
            global: {
                plugins: [createPinia()],
            },
        })

        await wrapper.get('[data-test="inc-btn"]').trigger('click')

        expect(wrapper.get('[data-test="count"]').text()).toBe('1')
    })
})