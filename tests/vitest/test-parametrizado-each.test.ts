import { describe, test, expect } from 'vitest'
import { sum } from '../../src/vitest/math'

describe('sum con test.each', () => {
    test.each([
        [1, 2, 3],
        [2, 3, 5],
        [0, 0, 0],
        [-1, 1, 0],
    ])('sum(%i, %i) = %i', (a, b, expected) => {
        expect(sum(a, b)).toBe(expected)
    })
})