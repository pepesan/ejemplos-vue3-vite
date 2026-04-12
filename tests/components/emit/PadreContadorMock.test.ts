import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

// Mock del componente hijo
vi.mock('../src/components/HijoContador.vue', () => ({
    default: {
        template: `
      <button @click="$emit('incrementar')">
        Incrementar
      </button>
    `
    }
}))

import PadreContador from '../../../src/components/emit/PadreContador.vue'

describe('PadreContador.vue', () => {
    it('incrementa el contador cuando el hijo emite el evento', async () => {
        const wrapper = mount(PadreContador)

        expect(wrapper.text()).toContain('Contador: 0')

        await wrapper.find('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })
})