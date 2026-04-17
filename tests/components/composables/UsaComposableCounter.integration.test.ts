import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

const { useCounterMock } = vi.hoisted(() => ({
    useCounterMock: vi.fn()
}))

vi.mock('../../../src/composables/useCounter', () => ({
    useCounter: useCounterMock
}))

import UsaComposableCounter from '../../../src/components/composables/UsaComposableCounter.vue'

describe('CounterA con mock del composable', () => {
    beforeEach(() => {
        useCounterMock.mockReset()
    })

    it('muestra el estado proporcionado por el composable mockeado', () => {
        const count = ref(5)
        const increment = vi.fn()

        useCounterMock.mockReturnValue({
            count,
            increment
        })

        const wrapper = mount(UsaComposableCounter)

        expect(useCounterMock).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('Componente Prueba')
        expect(wrapper.text()).toContain('Contador: 5')
    })

    it('llama a increment cuando se hace clic en el botón', async () => {
        const count = ref(0)
        const increment = vi.fn()

        useCounterMock.mockReturnValue({
            count,
            increment
        })

        const wrapper = mount(UsaComposableCounter)

        await wrapper.get('button').trigger('click')

        expect(increment).toHaveBeenCalledTimes(1)
    })
})