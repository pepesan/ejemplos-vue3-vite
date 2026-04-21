import { describe, test, expect, vi } from 'vitest'
import { registerUser } from '../../../src/vitest/mock/userService.ts'

describe('mocking de funciones con vi.fn', () => {
    test('permite interceptar llamadas a dependencias', () => {
        // Creamos una función mock
        const mockSendEmail = vi.fn()

        // Inyectamos el mock en lugar de la función real
        registerUser('test@test.com', mockSendEmail)

        // Verificamos que la función fue llamada
        expect(mockSendEmail).toHaveBeenCalled()

        // Verificamos con qué argumentos fue llamada
        expect(mockSendEmail).toHaveBeenCalledWith('test@test.com')
    })

    test('permite controlar el valor de retorno', () => {
        // Mock que devuelve un valor concreto
        const mockSendEmail = vi.fn().mockReturnValue(true)

        const result = registerUser('test@test.com', mockSendEmail)

        // Comprobamos que el flujo sigue funcionando
        expect(result).toBe('usuario registrado')
    })
})