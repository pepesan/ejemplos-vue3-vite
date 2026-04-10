import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EventosComoParametro from '../../../src/components/events/EventosComoParametro.vue'

describe('EventosComoParametro.vue', () => {
    it('muestra el valor inicial vacío', () => {
        const wrapper = mount(EventosComoParametro)

        expect(wrapper.text()).toContain('Has escrito:')
    })

    it('actualiza el texto al escribir en el input', async () => {
        const wrapper = mount(EventosComoParametro)

        const input = wrapper.get('input')

        await input.setValue('Hola Vue')

        expect(wrapper.text()).toContain('Has escrito: Hola Vue')
    })

    it('refleja correctamente múltiples cambios', async () => {
        const wrapper = mount(EventosComoParametro)

        const input = wrapper.get('input')

        await input.setValue('Primero')
        expect(wrapper.text()).toContain('Has escrito: Primero')

        await input.setValue('Segundo')
        expect(wrapper.text()).toContain('Has escrito: Segundo')
    })
})