import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import vyellowBackground from '../../src/directives/v-yellow-background'

describe('v-yellow-background', () => {
    it('aplica un fondo rojo al elemento', () => {
        const wrapper = mount({
            template: `<div v-yellow-background>Texto</div>`
        }, {
            global: {
                directives: {
                    'yellow-background': vyellowBackground
                }
            }
        })

        const div = wrapper.get('div')

        expect(div.element.style.backgroundColor).toBe('yellow')
    })
})