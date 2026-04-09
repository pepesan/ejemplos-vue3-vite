import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CondicionalComplexComponent from '../../../src/components/directives/CondicionalComplexComponent.vue'

describe('CondicionalComplexComponent.vue', () => {
    it('muestra el estado inicial (cargando)', () => {
        const wrapper = mount(CondicionalComplexComponent)

        expect(wrapper.text()).toContain('Cargando datos...')
    })

    it('muestra el estado de error al pulsar el botón correspondiente', async () => {
        const wrapper = mount(CondicionalComplexComponent)

        await wrapper.get('[data-testid="btn-error"]').trigger('click')

        expect(wrapper.text()).toContain('Ha ocurrido un error')
    })

    it('muestra el estado correcto al pulsar el botón OK', async () => {
        const wrapper = mount(CondicionalComplexComponent)

        await wrapper.get('[data-testid="btn-ok"]').trigger('click')

        expect(wrapper.text()).toContain('Datos cargados correctamente')
    })

    it('solo muestra un estado a la vez', async () => {
        const wrapper = mount(CondicionalComplexComponent)

        await wrapper.get('[data-testid="btn-ok"]').trigger('click')

        const texto = wrapper.text()

        expect(texto).toContain('Datos cargados correctamente')
        expect(texto).not.toContain('Cargando datos...')
        expect(texto).not.toContain('Ha ocurrido un error')
    })
    it('muestra varios estado a la vez', async () => {
        const wrapper = mount(CondicionalComplexComponent)

        await wrapper.get('[data-testid="btn-error"]').trigger('click')

        const texto = wrapper.text()

        expect(texto).not.toContain('Cargando datos...')
        expect(texto).toContain('Ha ocurrido un error')
    })
})