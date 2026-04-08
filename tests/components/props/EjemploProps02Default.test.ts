import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EjemploProps02Default from '../../../src/components/props/EjemploProps02Default.vue'

describe('EjemploProps02Default', () => {
    it('usa el valor por defecto cuando no se pasa el prop', () => {
        const wrapper = mount(EjemploProps02Default)

        expect(wrapper.text()).toContain('Hola Invitado')
    })

    it('usa el valor recibido por props cuando se proporciona', () => {
        const wrapper = mount(EjemploProps02Default, {
            props: {
                nombre: 'Juan'
            }
        })

        expect(wrapper.text()).toContain('Hola Juan')
    })
})