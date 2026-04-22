import { mount } from '@vue/test-utils'
import SimpleForm from '@/components/vue-utils/SimpleForm.vue'

describe('SimpleForm - interacciones', () => {
    it('permite escribir en el input y enviar el formulario', async () => {
        const wrapper = mount(SimpleForm)

        const input = wrapper.get('[data-test="input"]')
        const button = wrapper.get('[data-test="submit-btn"]')

        // escribir en el input
        await input.setValue('Carlos')

        // enviar formulario
        await button.trigger('submit')

        // comprobar resultado
        const result = wrapper.get('[data-test="result"]')
        expect(result.text()).toBe('Hola Carlos')
    })
})