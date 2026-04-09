import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CondicionalElseCompositionComponent from '../../../src/components/directives/CondicionalElseCompositionComponent.vue'

describe('CondicionalElseCompositionComponent.vue', () => {
    it('muestra el contenido oculto inicialmente', () => {
        const wrapper = mount(CondicionalElseCompositionComponent)

        expect(wrapper.text()).toContain('Mostrar')
        expect(wrapper.text()).toContain('El contenido está oculto')
        expect(wrapper.text()).not.toContain('El contenido está visible')
    })

    it('muestra el contenido visible al hacer click', async () => {
        const wrapper = mount(CondicionalElseCompositionComponent)

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Ocultar')
        expect(wrapper.text()).toContain('El contenido está visible')
        expect(wrapper.text()).not.toContain('El contenido está oculto')
    })

    it('vuelve al estado oculto al hacer doble click', async () => {
        const wrapper = mount(CondicionalElseCompositionComponent)

        const boton = wrapper.get('button')

        await boton.trigger('click')
        await boton.trigger('click')

        expect(wrapper.text()).toContain('Mostrar')
        expect(wrapper.text()).toContain('El contenido está oculto')
        expect(wrapper.text()).not.toContain('El contenido está visible')
    })
})