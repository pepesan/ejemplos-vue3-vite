import { computed, ref } from 'vue'

export function useDouble(initialValue: number = 0) {
    const number = ref<number>(initialValue)

    const doubled = computed(() => number.value * 2)

    return {
        number,
        doubled
    }
}