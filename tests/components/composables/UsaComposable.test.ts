import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

const { useFormatMock } = vi.hoisted(() => ({
    useFormatMock: vi.fn()
}))

vi.mock('../../../src/composables/useFormat', () => ({
    useFormat: useFormatMock
}))

import UsaComposable from '../../../src/components/composables/UsaComposable.vue'

describe('UsaComposable con mock del composable', () => {
    beforeEach(() => {
        useFormatMock.mockReset()
    })

    it('muestra el precio y la fecha formateados', () => {
        const currency = vi.fn().mockReturnValue('1234,50 €')
        const date = vi.fn().mockReturnValue('16/04/2026')

        useFormatMock.mockReturnValue({
            currency,
            date
        })

        const wrapper = mount(UsaComposable)

        expect(useFormatMock).toHaveBeenCalledTimes(1)
        expect(currency).toHaveBeenCalledTimes(1)
        expect(date).toHaveBeenCalledTimes(1)

        expect(currency).toHaveBeenCalledWith(1234.5)
        expect(date).toHaveBeenCalledWith('2026-04-16')

        expect(wrapper.text()).toContain('Precio: 1234,50 €')
        expect(wrapper.text()).toContain('Fecha: 16/04/2026')
    })
})