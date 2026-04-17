import { computed } from 'vue'
import { useFetch } from '@vueuse/core'

export interface Partido {
    nombre: string
    imagen: string
    dipu: number
}

export function usePartidos() {
    const url = 'https://pactometro.cursosdedesarrollo.com/resultados.json'

    const {
        data,
        error,
        isFetching,
    } = useFetch(url).get().json<Partido[]>()

    const partidos = computed(() => data.value ?? [])
    const errorMessage = computed(() => error.value?.message ?? null)

    return {
        partidos,
        error: errorMessage,
        isLoading: isFetching,
    }
}