import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UsaComposableCounter from '../../../src/components/composables/UsaComposableCounter.vue'

describe('CounterA', () => {
    it('muestra el valor inicial del contador', () => {
        const wrapper = mount(UsaComposableCounter)

        expect(wrapper.text()).toContain('Componente Prueba')
        expect(wrapper.text()).toContain('Contador: 0')
    })

    it('incrementa el contador al hacer clic en el botón', async () => {
        const wrapper = mount(UsaComposableCounter)

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })
})