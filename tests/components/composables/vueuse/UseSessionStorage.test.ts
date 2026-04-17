import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import UseSessionStorage from '../../../../src/components/composables/vueuse/UseSessionStorage.vue'

describe('UseSessionStorage', () => {
    beforeEach(() => {
        sessionStorage.clear()
    })

    it('muestra el valor guardado en sessionStorage al montar', () => {
        sessionStorage.setItem('token', 'abc123')

        const wrapper = mount(UseSessionStorage)

        expect(wrapper.get('input').element.value).toBe('abc123')
        expect(wrapper.text()).toContain('Token activo: abc123')
    })

    it('guarda el valor en sessionStorage al escribir en el input', async () => {
        const wrapper = mount(UseSessionStorage)
        const input = wrapper.get('input')

        await input.setValue('xyz789')

        expect(wrapper.text()).toContain('Token activo: xyz789')
        expect(sessionStorage.getItem('token')).toBe('xyz789')
    })

    it('no muestra el mensaje si el token está vacío', () => {
        const wrapper = mount(UseSessionStorage)

        expect(wrapper.text()).not.toContain('Token activo:')
    })
})