import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PadreContador from '../../../src/components/emit/PadreContador.vue'

describe('PadreContador', () => {
    it('muestra el contador inicial a 0', () => {
        const wrapper = mount(PadreContador)

        expect(wrapper.text()).toContain('Contador: 0')
    })

    it('incrementa el contador al hacer click en el botón del hijo', async () => {
        const wrapper = mount(PadreContador)

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })
})