import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ListaProductos from '../../../src/components/services/ListaProductos.vue'
import * as productoService from '../../../src/components/services/productoService'

describe('ListaProductos.vue', () => {
    it('muestra los productos devueltos por el servicio mockeado', async () => {
        vi.spyOn(productoService, 'obtenerProductos').mockResolvedValue([
            { id: 1, nombre: 'Teclado' },
            { id: 2, nombre: 'Monitor' }
        ])

        const wrapper = mount(ListaProductos)

        await flushPromises()

        const productos = wrapper.findAll('li')

        expect(productos).toHaveLength(2)
        expect(productos[0].text()).toBe('Teclado')
        expect(productos[1].text()).toBe('Monitor')
    })
})