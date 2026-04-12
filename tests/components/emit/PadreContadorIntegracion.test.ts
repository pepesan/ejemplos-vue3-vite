import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PadreContador from '../../../src/components/emit/PadreContador.vue'

describe('PadreContador.vue', () => {
    it('incrementa el contador cuando el hijo emite el evento', async () => {
        // simulamos un componente hijo
        const wrapper = mount(PadreContador, {
            global: {
                stubs: {
                    HijoContador: {
                        template: '<button @click="$emit(\'incrementar\')">Incrementar</button>'
                    }
                }
            }
        })

        expect(wrapper.text()).toContain('Contador: 0')

        await wrapper.find('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })
})