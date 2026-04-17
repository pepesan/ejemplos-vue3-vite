import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

const { useGreetingMock } = vi.hoisted(() => ({
    useGreetingMock: vi.fn()
}))

vi.mock('../../../src/ejercicios/unidad09/composables/useGreeting', () => ({
    useGreeting: useGreetingMock
}))

import UsaGreeting from '../../../src/ejercicios/unidad09/components/UsaGreeting.vue'

describe('UsaGreeting', () => {
    beforeEach(() => {
        useGreetingMock.mockReset()
    })

    it('muestra el saludo devuelto por el composable', () => {
        const greeting = vi.fn().mockReturnValue('Hola desde mock')

        useGreetingMock.mockReturnValue({
            greeting
        })

        const wrapper = mount(UsaGreeting)

        expect(wrapper.text()).toContain('Hola desde mock')
        expect(greeting).toHaveBeenCalledTimes(1)
    })
})