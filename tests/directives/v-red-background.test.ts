import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import vRedBackground from '../../src/directives/v-red-background'

describe('v-red-background', () => {
    it('aplica un fondo rojo al elemento', () => {
        const wrapper = mount({
            template: `<div v-red-background>Texto</div>`
        }, {
            global: {
                directives: {
                    'red-background': vRedBackground
                }
            }
        })

        const div = wrapper.get('div')

        expect(div.element.style.backgroundColor).toBe('red')
    })
})