import { describe, test, expect } from 'vitest'
import { sum, asyncSum } from '../../src/vitest/math'

describe('math', () => {
    // 🔹 Test síncrono
    test('sum suma correctamente', () => {
        expect(sum(2, 3)).toBe(5)
    })

    // 🔹 Test asíncrono (async/await)
    test('asyncSum suma correctamente (await)', async () => {
        const result = await asyncSum(2, 3)
        expect(result).toBe(5)
    })

    // 🔹 Alternativa: usando resolves
    test('asyncSum suma correctamente (resolves)', () => {
        return expect(asyncSum(2, 3)).resolves.toBe(5)
    })
})