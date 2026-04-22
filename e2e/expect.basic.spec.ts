import { test, expect } from '@playwright/test'

test('ejemplos de expect básicos', () => {
    // igualdad estricta
    expect(2 + 2).toBe(4)

    // igualdad de objetos (deep)
    expect({ a: 1 }).toEqual({ a: 1 })

    // truthy / falsy
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()

    // null / undefined
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()

    // números
    expect(10).toBeGreaterThan(5)
    expect(10).toBeLessThan(20)

    // strings
    expect('hola mundo').toContain('mundo')
    expect('hola mundo').toMatch(/hola/)

    // arrays
    expect([1, 2, 3]).toContain(2)
    expect([1, 2, 3]).toHaveLength(3)

    // objetos
    expect({ name: 'Carlos', age: 30 }).toHaveProperty('name')
})