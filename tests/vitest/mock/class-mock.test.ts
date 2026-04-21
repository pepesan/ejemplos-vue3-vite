import { describe, test, expect, vi } from 'vitest'
import { OrderService, PaymentService } from '../../../src/vitest/mock/payment.ts'

describe('mocking de dependencias entre clases', () => {
    test('permite simular el comportamiento de una clase dependiente', () => {
        // Creamos un mock del método process
        const mockProcess = vi.fn().mockReturnValue(true)

        // Creamos una "instancia falsa" de PaymentService
        const fakePaymentService = {
            process: mockProcess,
        } as unknown as PaymentService

        const orderService = new OrderService(fakePaymentService)

        const result = orderService.createOrder(100)

        // Verificamos resultado final
        expect(result).toBe('orden creada')

        // Verificamos interacción entre clases
        expect(mockProcess).toHaveBeenCalledWith(100)
    })

    test('permite simular fallo en la dependencia', () => {
        const mockProcess = vi.fn().mockReturnValue(false)

        const fakePaymentService = {
            process: mockProcess,
        } as unknown as PaymentService

        const orderService = new OrderService(fakePaymentService)

        // Verificamos que lanza error
        expect(() => orderService.createOrder(100)).toThrow('Pago fallido')
    })
})