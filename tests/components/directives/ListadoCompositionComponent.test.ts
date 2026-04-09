import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ListadoCompositionComponent from '../../../src/components/directives/ListadoCompositionComponent.vue'

describe('ListadoCompositionComponent.vue', () => {
    it('renderiza una lista con todos los elementos recibidos por props', () => {
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ]

        const wrapper = mount(ListadoCompositionComponent, {
            props: { items }
        })

        const elementos = wrapper.findAll('li')

        expect(elementos).toHaveLength(3)
        expect(elementos[0].text()).toBe('Item 1')
        expect(elementos[1].text()).toBe('Item 2')
        expect(elementos[2].text()).toBe('Item 3')
    })

    it('renderiza el componente hijo una vez por cada item', () => {
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ]

        const wrapper = mount(ListadoCompositionComponent, {
            props: { items }
        })

        expect(wrapper.findAllComponents({ name: 'ListadoItemCompositionComponent' })).toHaveLength(3)
    })
})