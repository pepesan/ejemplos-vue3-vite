import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EventosParametros from '../../../src/components/events/EventosParametros.vue'

describe('EventosParametros.vue', () => {
    it('muestra el valor inicial del contador', () => {
        const wrapper = mount(EventosParametros)

        expect(wrapper.text()).toContain('Contador: 0')
    })

    it('suma 1 al hacer click en +1', async () => {
        const wrapper = mount(EventosParametros)

        const botones = wrapper.findAll('button')

        await botones[0].trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })

    it('suma 5 al hacer click en +5', async () => {
        const wrapper = mount(EventosParametros)

        const botones = wrapper.findAll('button')

        await botones[1].trigger('click')

        expect(wrapper.text()).toContain('Contador: 5')
    })

    it('suma 10 al hacer click en +10', async () => {
        const wrapper = mount(EventosParametros)

        const botones = wrapper.findAll('button')

        await botones[2].trigger('click')

        expect(wrapper.text()).toContain('Contador: 10')
    })

    it('acumula correctamente varias operaciones', async () => {
        const wrapper = mount(EventosParametros)

        const botones = wrapper.findAll('button')

        await botones[0].trigger('click') // +1
        await botones[1].trigger('click') // +5
        await botones[2].trigger('click') // +10

        expect(wrapper.text()).toContain('Contador: 16')
    })
})