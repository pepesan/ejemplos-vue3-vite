import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import { usePartidos } from '../../../src/composables/vueuse/usePartidos'

vi.mock('@vueuse/core', () => ({
    useFetch: vi.fn(),
}))

describe('usePartidos', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('devuelve los partidos cuando la petición tiene éxito', () => {
        const partidosMock = [
            { nombre: 'Partido A', imagen: 'a.png', dipu: 10 },
            { nombre: 'Partido B', imagen: 'b.png', dipu: 20 },
        ]

        const jsonMock = vi.fn().mockReturnValue({
            data: ref(partidosMock),
            error: ref(null),
            isFetching: ref(false),
        })

        const getMock = vi.fn().mockReturnValue({
            json: jsonMock,
        })

        vi.mocked(useFetch).mockReturnValue({
            get: getMock,
        } as any)

        const { partidos, error, isLoading } = usePartidos()

        expect(partidos.value).toHaveLength(2)
        expect(partidos.value[0].nombre).toBe('Partido A')
        expect(error.value).toBe(null)
        expect(isLoading.value).toBe(false)
    })

    it('devuelve un array vacío si no hay datos', () => {
        const jsonMock = vi.fn().mockReturnValue({
            data: ref(null),
            error: ref(null),
            isFetching: ref(false),
        })

        const getMock = vi.fn().mockReturnValue({
            json: jsonMock,
        })

        vi.mocked(useFetch).mockReturnValue({
            get: getMock,
        } as any)

        const { partidos } = usePartidos()

        expect(partidos.value).toEqual([])
    })

    it('devuelve un mensaje de error cuando falla la petición', () => {
        const jsonMock = vi.fn().mockReturnValue({
            data: ref(null),
            error: ref(new Error('Network Error')),
            isFetching: ref(false),
        })

        const getMock = vi.fn().mockReturnValue({
            json: jsonMock,
        })

        vi.mocked(useFetch).mockReturnValue({
            get: getMock,
        } as any)

        const { partidos, error, isLoading } = usePartidos()

        expect(partidos.value).toEqual([])
        expect(error.value).toBe('Network Error')
        expect(isLoading.value).toBe(false)
    })

    it('indica estado de carga mientras se está obteniendo la información', () => {
        const jsonMock = vi.fn().mockReturnValue({
            data: ref(null),
            error: ref(null),
            isFetching: ref(true),
        })

        const getMock = vi.fn().mockReturnValue({
            json: jsonMock,
        })

        vi.mocked(useFetch).mockReturnValue({
            get: getMock,
        } as any)

        const { isLoading } = usePartidos()

        expect(isLoading.value).toBe(true)
    })
})