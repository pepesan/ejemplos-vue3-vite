import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UsaDirectivaCustomComponent from '../../../src/components/directives/UsaDirectivaCustomComponent.vue'
import vRedBackground from '../../../src/directives/v-red-background'
import vYellowBackground from '../../../src/directives/v-yellow-background'

describe('UsaDirectivaCustomComponent.vue', () => {
    it('aplica los estilos de ambas directivas', () => {
        const wrapper = mount(UsaDirectivaCustomComponent, {
            global: {
                directives: {
                    'red-background': vRedBackground,
                    'yellow-background': vYellowBackground
                }
            }
        })

        const rojo = wrapper.get('#rojo').element as HTMLDivElement
        const amarillo = wrapper.get('#amarillo').element as HTMLDivElement

        expect(rojo.style.backgroundColor).toBe('red')
        expect(amarillo.style.backgroundColor).toBe('yellow')
    })

    it('renderiza correctamente los textos', () => {
        const wrapper = mount(UsaDirectivaCustomComponent, {
            global: {
                directives: {
                    'red-background': vRedBackground,
                    'yellow-background': vYellowBackground
                }
            }
        })

        const texto = wrapper.text()

        expect(texto).toContain('Este div tiene un fondo amarillo.')
        expect(texto).toContain('Este div tiene un fondo rojo.')
    })
})