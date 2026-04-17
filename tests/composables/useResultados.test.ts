import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useResultados } from '../../src/composables/useResultados'
import axios, { AxiosError } from 'axios'

vi.mock('axios')

describe('useResultados', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('inicializa con valores por defecto', () => {
        const { resultados, loading, error } = useResultados()

        expect(resultados.value).toEqual([])
        expect(loading.value).toBe(false)
        expect(error.value).toBe(null)
    })

    it('carga resultados correctamente y construye imagenUrl', async () => {
        vi.mocked(axios.get).mockResolvedValue({
            data: [
                { nombre: 'Partido A', dipu: 10, imagen: 'a.png' },
                { nombre: 'Partido B', dipu: 5, imagen: 'b.png' }
            ]
        } as never)

        const { resultados, loading, error, fetchResultados } = useResultados()

        const promise = fetchResultados()

        expect(loading.value).toBe(true)
        expect(error.value).toBe(null)

        await promise

        expect(loading.value).toBe(false)
        expect(error.value).toBe(null)
        expect(resultados.value).toEqual([
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
        ])
    })

    it('guarda el mensaje cuando axios lanza un AxiosError', async () => {
        const axiosError = new Error('Error de red')
        Object.setPrototypeOf(axiosError, AxiosError.prototype)

        vi.mocked(axios.get).mockRejectedValue(axiosError)

        const { error, loading, fetchResultados } = useResultados()

        await fetchResultados()

        expect(loading.value).toBe(false)
        expect(error.value).toBe('Error de red')
    })

    it('muestra un mensaje genérico cuando el error no es de axios', async () => {
        vi.mocked(axios.get).mockRejectedValue('fallo raro')

        const { error, loading, fetchResultados } = useResultados()

        await fetchResultados()

        expect(loading.value).toBe(false)
        expect(error.value).toBe('Error desconocido al cargar los resultados')
    })

    it('llama a la URL correcta', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: [] } as never)

        const { fetchResultados } = useResultados()

        await fetchResultados()

        expect(axios.get).toHaveBeenCalledWith(
            'https://pactometro.cursosdedesarrollo.com/resultados.json'
        )
    })
})