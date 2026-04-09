import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import WatchComponent from '../../../src/components/reactive/WatchComponent.vue'

describe('WatchContador.vue', () => {
    it('muestra el valor inicial del contador', () => {
        const wrapper = mount(WatchComponent)

        expect(wrapper.text()).toContain('Contador: 0')
    })

    it('incrementa el contador al hacer click', async () => {
        const wrapper = mount(WatchComponent)

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })

    it('ejecuta el watch al cambiar el contador', async () => {
        const logSpy = vi.spyOn(console, 'log')

        const wrapper = mount(WatchComponent)

        await wrapper.get('button').trigger('click')

        expect(logSpy).toHaveBeenCalledWith(
            'El contador ha cambiado de 0 a 1'
        )

        logSpy.mockRestore()
    })
})