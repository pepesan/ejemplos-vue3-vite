import { describe, test, expect } from 'vitest'
import {
    getPi,
    getItems,
    getUserPartial,
    isEven,
} from '../../src/vitest/moreUtils'

describe('Más matchers', () => {
    test('aproximación de números', () => {
        expect(getPi()).toBeCloseTo(3.14, 2)
    })

    test('longitud', () => {
        expect(getItems()).toHaveLength(3)
        expect('hola').toHaveLength(4)
    })

    test('parte de un objeto', () => {
        expect(getUserPartial()).toMatchObject({
            name: 'Ana',
        })
    })

    test('array contiene elementos (subset)', () => {
        expect(getItems()).toEqual(
            expect.arrayContaining(['apple', 'banana'])
        )
    })

    test('objeto contiene propiedades (subset)', () => {
        expect(getUserPartial()).toEqual(
            expect.objectContaining({
                role: 'admin',
            })
        )
    })

    test('string con expresión regular', () => {
        expect('vitest').toMatch(/test/)
    })

    test('matcher personalizado con expect.any', () => {
        expect(getUserPartial()).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            role: expect.any(String),
        })
    })

    test('verificar tipo booleano indirectamente', () => {
        expect(isEven(4)).toBeTruthy()
        expect(isEven(5)).toBeFalsy()
    })
})