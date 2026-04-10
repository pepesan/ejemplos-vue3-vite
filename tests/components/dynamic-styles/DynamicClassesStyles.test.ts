import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DynamicClassesStyles from '../../../src/components/dynamic-styles/DynamicClassesStyles.vue'

describe('DynamicClassesStyles.vue', () => {
    it('estado inicial: sin clase destacado y color gris', () => {
        const wrapper = mount(DynamicClassesStyles)

        const parrafo = wrapper.get('p').element as HTMLParagraphElement

        expect(parrafo.classList.contains('destacado')).toBe(false)
        expect(parrafo.style.color).toBe('gray')
    })

    it('aplica clase y cambia color al hacer click', async () => {
        const wrapper = mount(DynamicClassesStyles)

        await wrapper.get('button').trigger('click')

        const parrafo = wrapper.get('p').element as HTMLParagraphElement

        expect(parrafo.classList.contains('destacado')).toBe(true)
        expect(parrafo.style.color).toBe('green')
    })

    it('vuelve al estado inicial al hacer doble click', async () => {
        const wrapper = mount(DynamicClassesStyles)

        const boton = wrapper.get('button')

        await boton.trigger('click')
        await boton.trigger('click')

        const parrafo = wrapper.get('p').element as HTMLParagraphElement

        expect(parrafo.classList.contains('destacado')).toBe(false)
        expect(parrafo.style.color).toBe('gray')
    })
})