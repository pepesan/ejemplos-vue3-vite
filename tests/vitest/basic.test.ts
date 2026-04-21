import { describe, expect, test } from 'vitest'
import { sum } from '../../src/vitest/sum'

describe('sum', () => {
    test('suma dos números', () => {
        expect(sum(2, 3)).toBe(5)
    })

    test('también funciona con negativos', () => {
        expect(sum(-2, 1)).toBe(-1)
    })
})