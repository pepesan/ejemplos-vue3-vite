// PartidosAxiosEnvVariableComponent.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import PartidosAxiosEnvVariableComponent from '../../../src/components/httprequest/PartidosAxiosEnvVariableComponent.vue'

vi.mock('axios')

const mockedAxios = vi.mocked(axios, true)

describe('PartidosAxiosEnvVariableComponent', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('muestra el loading al inicio', () => {
        mockedAxios.get.mockReturnValue(new Promise(() => {}))

        const wrapper = mount(PartidosAxiosEnvVariableComponent)

        expect(wrapper.text()).toContain('Cargando resultados...')
    })

    it('renderiza la tabla con los partidos cuando la petición es correcta', async () => {
        const partidosMock = [
            {
                nombre: 'Partido A',
                imagen: 'partido-a.png',
                dipu: 120,
            },
            {
                nombre: 'Partido B',
                imagen: 'partido-b.png',
                dipu: 80,
            },
        ]

        mockedAxios.get.mockResolvedValue({
            data: partidosMock,
        })

        const wrapper = mount(PartidosAxiosEnvVariableComponent)

        await flushPromises()

        expect(wrapper.find('table').exists()).toBe(true)
        expect(wrapper.text()).toContain('Partido A')
        expect(wrapper.text()).toContain('120 diputados')
        expect(wrapper.text()).toContain('Partido B')
        expect(wrapper.text()).toContain('80 diputados')

        const rows = wrapper.findAll('tbody tr')
        expect(rows).toHaveLength(2)

        const images = wrapper.findAll('img')
        expect(images).toHaveLength(2)

        expect(images[0].attributes('alt')).toBe('Partido A')
        expect(images[1].attributes('alt')).toBe('Partido B')
    })

    it('muestra un mensaje de error si la petición falla con AxiosError', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Request failed'))

        const wrapper = mount(PartidosAxiosEnvVariableComponent)

        await flushPromises()

        expect(wrapper.text()).toContain('Error al cargar los datos')
    })
})