export function getUser() {
    return {
        id: 1,
        name: 'Juan',
        active: true,
    }
}

export function getNumbers() {
    return [1, 2, 3]
}

export function getNull() {
    return null
}

export function throwError() {
    throw new Error('Algo salió mal')
}