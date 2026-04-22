import { mount } from '@vue/test-utils'
import {describe, it, expect, test} from 'vitest'
import EjemploProps01 from '@/components/props/EjemploProps01.vue'

describe('EjemploProps01', () => {
    it('muestra el nombre recibido por props', () => {
        const wrapper = mount(EjemploProps01, {
            props: {
                nombre: 'Juan'
            }
        })

        expect(wrapper.text()).toContain('Hola Juan')
    })
    it('muestra otro nombre recibido por props', () => {
        const wrapper = mount(EjemploProps01, {
            props: {
                nombre: 'Pepe'
            }
        })

        expect(wrapper.text()).toContain('Hola Pepe')
    })
    // Prueba parametrizada
    test.each([
        ["Juan", "Hola Juan"],
        ["Pepe", "Hola Pepe"],

    ])('Prop(%s) Expected (%s)', (prop: string, expected:string) => {
        const wrapper = mount(EjemploProps01, {
            props: {
                nombre: prop
            }
        })
        expect(wrapper.text()).toContain(expected);
    })
})