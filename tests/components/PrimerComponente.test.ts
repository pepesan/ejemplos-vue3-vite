import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PrimerComponente from '../../src/components/PrimerComponente.vue'

describe('PrimerComponente', () => {
    it('incrementa el contador al hacer click', async () => {
        const wrapper = mount(PrimerComponente)

        expect(wrapper.text()).toContain('Contador: 0')

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })
})