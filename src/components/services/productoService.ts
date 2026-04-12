export async function obtenerProductos() {
    return Promise.resolve([
        { id: 1, nombre: 'Portátil' },
        { id: 2, nombre: 'Ratón' }
    ])
}