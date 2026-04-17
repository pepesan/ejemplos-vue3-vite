import { describe, expect, it } from 'vitest'
import { useDouble } from '../../../src/ejercicios/unidad09/composables/useDouble'

describe('useDouble', () => {
    it('devuelve el doble del número inicial', () => {
        const { number, doubled } = useDouble(4)

        expect(number.value).toBe(4)
        expect(doubled.value).toBe(8)
    })
})