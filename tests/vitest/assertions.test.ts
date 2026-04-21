import { describe, test, expect } from 'vitest'
import {
    getUser,
    getNumbers,
    getNull,
    throwError,
} from '../../src/vitest/utils'

describe('Aserciones básicas', () => {
    test('igualdad estricta', () => {
        expect(2 + 2).toBe(4)
    })

    test('igualdad profunda (objetos)', () => {
        expect(getUser()).toEqual({
            id: 1,
            name: 'Juan',
            active: true,
        })
    })

    test('comparaciones numéricas', () => {
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
    })

    test('booleanos', () => {
        expect(true).toBe(true)
        expect(false).toBe(false)
    })

    test('null y undefined', () => {
        expect(getNull()).toBeNull()
        expect(undefined).toBeUndefined()
    })

    test('arrays contienen valores', () => {
        expect(getNumbers()).toContain(2)
    })

    test('objetos contienen propiedades', () => {
        expect(getUser()).toHaveProperty('name')
    })

    test('strings', () => {
        expect('hola mundo').toMatch('mundo')
    })

    test('errores', () => {
        expect(() => throwError()).toThrow('Algo salió mal')
    })

    test('negación', () => {
        expect(2 + 2).not.toBe(5)
    })
})