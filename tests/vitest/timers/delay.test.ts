import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { waitAndReturn, callAfterDelay } from '../../../src/vitest/timers/delay'

describe('control del tiempo con fake timers', () => {
    beforeEach(() => {
        // Activamos timers falsos antes de cada test
        vi.useFakeTimers()
    })

    afterEach(() => {
        // Restauramos timers reales después de cada test
        vi.useRealTimers()
    })

    test('permite avanzar el tiempo manualmente para resolver promesas', async () => {
        const promise = waitAndReturn('ok', 1000)

        // Avanzamos el tiempo 1 segundo
        vi.advanceTimersByTime(1000)

        // La promesa se resuelve inmediatamente sin esperar en tiempo real
        await expect(promise).resolves.toBe('ok')
    })

    test('permite verificar ejecución de callbacks tras un delay', () => {
        const callback = vi.fn()

        callAfterDelay(callback, 500)

        // Aún no se ha ejecutado
        expect(callback).not.toHaveBeenCalled()

        // Avanzamos el tiempo
        vi.advanceTimersByTime(500)

        // Ahora sí se ha ejecutado
        expect(callback).toHaveBeenCalled()
    })
})