import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

const { useResultadosMock } = vi.hoisted(() => ({
    useResultadosMock: vi.fn()
}))

vi.mock('../../../src/composables/useResultados', () => ({
    useResultados: useResultadosMock
}))

import UsaComposableResultados from '../../../src/components/composables/UsaComposableResultados.vue'

describe('UsaComposableResultados - prueba integración', () => {
    beforeEach(() => {
        useResultadosMock.mockReset()
    })

    it('muestra el estado de carga', () => {
        const fetchResultados = vi.fn()

        useResultadosMock.mockReturnValue({
            resultados: ref([]),
            loading: ref(true),
            error: ref(null),
            fetchResultados
        })

        const wrapper = mount(UsaComposableResultados)

        expect(fetchResultados).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('Cargando resultados...')
    })

    it('muestra el mensaje de error', () => {
        const fetchResultados = vi.fn()

        useResultadosMock.mockReturnValue({
            resultados: ref([]),
            loading: ref(false),
            error: ref('Error al cargar'),
            fetchResultados
        })

        const wrapper = mount(UsaComposableResultados)

        expect(fetchResultados).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('Error al cargar')
    })

    it('muestra la lista de resultados', () => {
        const fetchResultados = vi.fn()

        useResultadosMock.mockReturnValue({
            resultados: ref([
                {
                    nombre: 'Partido A',
                    dipu: 10,
                    imagen: 'a.png',
                    imagenUrl: 'https://pactometro.cursosdedesarrollo.com/img/a.png'
                },
                {
                    nombre: 'Partido B',
                    dipu: 5,
                    imagen: 'b.png',
                    imagenUrl: 'https://pactometro.cursosdedesarrollo.com/img/b.png'
                }
            ]),
            loading: ref(false),
            error: ref(null),
            fetchResultados
        })

        const wrapper = mount(UsaComposableResultados)

        expect(fetchResultados).toHaveBeenCalledTimes(1)

        const items = wrapper.findAll('li')
        const images = wrapper.findAll('img')

        expect(items).toHaveLength(2)
        expect(wrapper.text()).toContain('Partido A')
        expect(wrapper.text()).toContain('10 diputados')
        expect(wrapper.text()).toContain('Partido B')
        expect(wrapper.text()).toContain('5 diputados')

        expect(images[0].attributes('src')).toBe('https://pactometro.cursosdedesarrollo.com/img/a.png')
        expect(images[0].attributes('alt')).toBe('Logo de Partido A')
    })
})