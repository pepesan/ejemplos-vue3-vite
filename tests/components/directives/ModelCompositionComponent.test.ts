import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, afterEach } from 'vitest'
import ModelCompositionComponent from '../../../src/components/directives/ModelCompositionComponent.vue'

describe('ModelCompositionComponent.vue', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('muestra el valor inicial vacío', () => {
        const wrapper = mount(ModelCompositionComponent)

        expect((wrapper.get('#campo').element as HTMLInputElement).value).toBe('')
        expect(wrapper.get('#mensaje').text()).toBe('El valor actual es:')
    })

    it('actualiza el texto al escribir en el input', async () => {
        const wrapper = mount(ModelCompositionComponent)

        await wrapper.get('#campo').setValue('Ana')

        expect(wrapper.get('#mensaje').text()).toContain('El valor actual es: Ana')
    })

    it('muestra en consola el valor actual al pulsar el botón', async () => {
        const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

        const wrapper = mount(ModelCompositionComponent)

        await wrapper.get('#campo').setValue('Luis')
        await wrapper.get('#inc').trigger('click')

        expect(logSpy).toHaveBeenCalledWith('Luis')
    })
})