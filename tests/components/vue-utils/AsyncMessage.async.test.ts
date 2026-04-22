import { mount } from '@vue/test-utils'
import AsyncMessage from '@/components/vue-utils/AsyncMessage.vue'
import { nextTick } from 'vue'

describe('AsyncMessage - asincronía', () => {
    it('actualiza el DOM después de una operación async', async () => {
        const wrapper = mount(AsyncMessage)

        const button = wrapper.get('[data-test="load-btn"]')
        await button.trigger('click')

        // esperar a que Vue actualice el DOM
        await nextTick()

        const message = wrapper.get('[data-test="message"]')
        expect(message.text()).toBe('Mensaje cargado')
    })
})