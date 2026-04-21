import { describe, test, expect, vi } from 'vitest'

// Mock del módulo completo ANTES de importarlo
vi.mock('../../../src/vitest/mock/api', () => {
    return {
        fetchUser: vi.fn(),
    }
})

// Importamos después del mock
import { fetchUser } from '../../../src/vitest/mock/api'
import { getUserName } from '../../../src/vitest/mock/userController'

describe('mocking de módulos con vi.mock', () => {
    test('permite reemplazar implementación de un módulo', async () => {
        // Definimos comportamiento del mock
        ;(fetchUser as any).mockResolvedValue({
            id: 1,
            name: 'Usuario mock',
        })

        const result = await getUserName(1)

        // Verificamos resultado
        expect(result).toBe('Usuario mock')

        // Verificamos interacción
        expect(fetchUser).toHaveBeenCalledWith(1)
    })
})