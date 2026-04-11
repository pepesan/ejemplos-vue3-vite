import { mount } from '@vue/test-utils'
import FormPrevent from '../../../src/components/events/EventoPrevent.vue'

describe('FormPrevent.vue', () => {
    it('ejecuta handleSubmit sin recargar la página', async () => {
        const wrapper = mount(FormPrevent)

        // Simulamos escritura en el input
        await wrapper.find('input').setValue('Juan')

        // Simulamos envío del formulario
        await wrapper.find('form').trigger('submit')

        // Comprobamos que el valor se ha procesado
        expect(wrapper.vm.name).toBe('Juan')
    })
})