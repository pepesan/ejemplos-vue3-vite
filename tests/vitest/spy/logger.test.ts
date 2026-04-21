import { describe, test, expect, vi, afterEach } from 'vitest'
import { Logger, UserService } from '../../../src/vitest/spy/logger'

describe('observación de llamadas con vi.spyOn', () => {
    afterEach(() => {
        // Restauramos los spies después de cada test
        vi.restoreAllMocks()
    })

    test('permite observar llamadas a un método real sin reemplazarlo', () => {
        const logger = new Logger()
        const userService = new UserService(logger)

        const logSpy = vi.spyOn(logger, 'log')

        const result = userService.createUser('Ana')

        // Se ejecuta la implementación real
        expect(result).toBe('Resultado: [LOG] Creando usuario: Ana')

        // Y además podemos verificar la interacción
        expect(logSpy).toHaveBeenCalledWith('Creando usuario: Ana')
    })

    test('permite observar llamadas y además cambiar temporalmente la implementación', () => {
        const logger = new Logger()
        const userService = new UserService(logger)

        const logSpy = vi.spyOn(logger, 'log').mockImplementation((message: string) => {
            return `[MOCK] ${message}`
        })

        const result = userService.createUser('Luis')

        // Aquí sí vemos claramente que se ha usado la implementación falsa
        expect(result).toBe('Resultado: [MOCK] Creando usuario: Luis')
        expect(logSpy).toHaveBeenCalledWith('Creando usuario: Luis')
    })

    test('permite devolver un valor específico desde el spy y comprobar su efecto', () => {
        const logger = new Logger()
        const userService = new UserService(logger)

        const logSpy = vi.spyOn(logger, 'log').mockReturnValue('mensaje controlado')

        const result = userService.createUser('Carlos')

        // Esta aserción demuestra que el valor devuelto por el spy
        // ha sido realmente usado por el código probado
        expect(result).toBe('Resultado: mensaje controlado')

        // Además seguimos comprobando la interacción
        expect(logSpy).toHaveBeenCalledWith('Creando usuario: Carlos')
    })
})