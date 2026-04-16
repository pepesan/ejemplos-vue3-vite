// composables/useResultados.ts
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'

const BASE_URL = 'https://pactometro.cursosdedesarrollo.com'
const IMG_BASE_URL = `${BASE_URL}/img/`

export interface ResultadoPartido {
    nombre: string
    dipu: number
    imagen: string
}

export interface ResultadoPartidoConImagen extends ResultadoPartido {
    imagenUrl: string
}

export function useResultados() {
    const resultados = ref<ResultadoPartidoConImagen[]>([])
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    const fetchResultados = async (): Promise<void> => {
        loading.value = true
        error.value = null

        try {
            const { data } = await axios.get<ResultadoPartido[]>(
                `${BASE_URL}/resultados.json`
            )

            resultados.value = data.map((partido) => ({
                ...partido,
                imagenUrl: `${IMG_BASE_URL}${partido.imagen}`,
            }))
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                error.value = err.message
            } else {
                error.value = 'Error desconocido al cargar los resultados'
            }
        } finally {
            loading.value = false
        }
    }

    return {
        resultados,
        loading,
        error,
        fetchResultados,
    }
}