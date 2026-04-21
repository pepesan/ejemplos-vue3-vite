import { describe, test, expect } from 'vitest'
import { multiply } from '../../src/vitest/basic'

describe('control de ejecución de tests', () => {
    // Test normal: se ejecuta siempre
    test('ejecución normal de un test', () => {
        expect(multiply(2, 3)).toBe(6)
    })

    // test.skip: este test NO se ejecuta
    // útil cuando el test está roto o en desarrollo
    test.skip('este test se omite intencionadamente', () => {
        expect(multiply(2, 2)).toBe(5) // fallaría, pero no importa porque está skip
    })

    // test.only: SOLO se ejecuta este test
    // todos los demás tests se ignoran incluido el primer test
    test.only('ejecutar únicamente este test para aislar comportamiento', () => {
        expect(multiply(3, 3)).toBe(9)
    })

    // test.todo: declara un test pendiente
    // no ejecuta código, solo documenta que falta cubrir este caso
    test.todo('pendiente cubrir casos con números negativos')
})