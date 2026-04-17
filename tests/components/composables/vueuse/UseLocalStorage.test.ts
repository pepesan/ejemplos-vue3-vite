import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import UseLocalStorage from '../../../../src/components/composables/vueuse/UseLocalStorage.vue'

describe('UseLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('muestra el valor guardado en localStorage al montar', () => {
        localStorage.setItem('username', 'Ana')

        const wrapper = mount(UseLocalStorage)

        expect(wrapper.get('input').element.value).toBe('Ana')
        expect(wrapper.text()).toContain('Hola, Ana')
    })

    it('guarda el valor en localStorage al escribir en el input', async () => {
        const wrapper = mount(UseLocalStorage)
        const input = wrapper.get('input')

        await input.setValue('Carlos')

        expect(wrapper.text()).toContain('Hola, Carlos')
        expect(localStorage.getItem('username')).toBe('Carlos')
    })

    it('no muestra el saludo si el nombre está vacío', () => {
        const wrapper = mount(UseLocalStorage)

        expect(wrapper.text()).not.toContain('Hola,')
    })
})