import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ListadoComponent from '../../../src/components/directives/ListadoComponent.vue'

describe('ListadoComponent.vue', () => {
    it('renderiza la lista de tareas', () => {
        const wrapper = mount(ListadoComponent)

        const items = wrapper.findAll('li')

        expect(items.length).toBe(3)
        expect(items[0].text()).toContain('1 - Aprender Vue')
        expect(items[1].text()).toContain('2 - Practicar componentes')
        expect(items[2].text()).toContain('3 - Crear un proyecto')
    })

    it('muestra correctamente el contenido de cada elemento', () => {
        const wrapper = mount(ListadoComponent)

        const texto = wrapper.text()

        expect(texto).toContain('Aprender Vue')
        expect(texto).toContain('Practicar componentes')
        expect(texto).toContain('Crear un proyecto')
    })
})