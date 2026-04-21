import { describe, test, expect } from 'vitest'
import { delayedValue } from '../../src/vitest/asyncUtils'

describe('tests concurrentes', () => {
    test.concurrent('resuelve valor 1', async () => {
        const result = await delayedValue(1, 100)
        expect(result).toBe(1)
    })

    test.concurrent('resuelve valor 2', async () => {
        const result = await delayedValue(2, 100)
        expect(result).toBe(2)
    })

    test.concurrent('resuelve valor 3', async () => {
        const result = await delayedValue(3, 100)
        expect(result).toBe(3)
    })
})