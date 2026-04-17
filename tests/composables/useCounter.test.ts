import { describe, expect, it } from 'vitest'
import { useCounter } from '../../src/composables/useCounter'

describe('useCounter', () => {
    it('inicializa el contador en 0', () => {
        const { count } = useCounter()

        expect(count.value).toBe(0)
    })

    it('incrementa el contador en 1', () => {
        const { count, increment } = useCounter()

        increment()

        expect(count.value).toBe(1)
    })

    it('cada uso del composable crea un estado independiente', () => {
        const counterA = useCounter()
        const counterB = useCounter()

        counterA.increment()
        counterA.increment()

        expect(counterA.count.value).toBe(2)
        expect(counterB.count.value).toBe(0)
    })
})