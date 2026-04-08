import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EjemploProps01 from '../../../src/components/props/EjemploProps01.vue'

describe('EjemploProps01', () => {
    it('muestra el nombre recibido por props', () => {
        const wrapper = mount(EjemploProps01, {
            props: {
                nombre: 'Juan'
            }
        })

        expect(wrapper.text()).toContain('Hola Juan')
    })
})