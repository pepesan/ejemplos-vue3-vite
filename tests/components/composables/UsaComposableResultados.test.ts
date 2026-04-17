import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import UsaComposableResultados from '../../../src/components/composables/UsaComposableResultados.vue'
import {nextTick} from "vue";

vi.mock('axios')

describe('UsaComposableResultados - prueba de integración', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('muestra los resultados cargados desde el composable', async () => {
        vi.mocked(axios.get).mockResolvedValue({
            data: [
                { nombre: 'Partido A', dipu: 10, imagen: 'a.png' },
                { nombre: 'Partido B', dipu: 5, imagen: 'b.png' }
            ]
        } as never)

        const wrapper = mount(UsaComposableResultados)

        await flushPromises()

        const items = wrapper.findAll('li')
        const images = wrapper.findAll('img')

        expect(axios.get).toHaveBeenCalledWith(
            'https://pactometro.cursosdedesarrollo.com/resultados.json'
        )

        expect(items).toHaveLength(2)
        expect(wrapper.text()).toContain('Partido A')
        expect(wrapper.text()).toContain('10 diputados')
        expect(wrapper.text()).toContain('Partido B')
        expect(wrapper.text()).toContain('5 diputados')

        expect(images[0].attributes('src')).toBe('https://pactometro.cursosdedesarrollo.com/img/a.png')
        expect(images[0].attributes('alt')).toBe('Logo de Partido A')
        expect(images[1].attributes('src')).toBe('https://pactometro.cursosdedesarrollo.com/img/b.png')
        expect(images[1].attributes('alt')).toBe('Logo de Partido B')
    })

    it('muestra un error si la petición falla', async () => {
        vi.mocked(axios.get).mockRejectedValue('fallo raro')

        const wrapper = mount(UsaComposableResultados)

        await flushPromises()

        expect(wrapper.text()).toContain('Error desconocido al cargar los resultados')
    })

    it('muestra el indicador de carga mientras la petición no resuelve', async () => {
        vi.mocked(axios.get).mockImplementation(() => new Promise(() => {}))

        const wrapper = mount(UsaComposableResultados)

        await nextTick()

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('Cargando resultados...')
    })
})