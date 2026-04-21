import {
    describe,
    test,
    expect,
    beforeEach,
    afterEach,
    beforeAll,
    afterAll,
} from 'vitest'
import { Counter } from '../../src/vitest/counter'

let counter: Counter

describe('Counter con hooks', () => {
    // 🔹 Se ejecuta UNA vez antes de todos los tests
    beforeAll(() => {
        console.log('Inicio de tests')
    })

    // 🔹 Se ejecuta ANTES de cada test
    beforeEach(() => {
        counter = new Counter()
    })

    // 🔹 Se ejecuta DESPUÉS de cada test
    afterEach(() => {
        console.log('Test terminado')
    })

    // 🔹 Se ejecuta UNA vez al final
    afterAll(() => {
        console.log('Fin de tests')
    })

    test('empieza en 0', () => {
        expect(counter.getValue()).toBe(0)
    })

    test('incrementa correctamente', () => {
        counter.increment()
        expect(counter.getValue()).toBe(1)
    })
})