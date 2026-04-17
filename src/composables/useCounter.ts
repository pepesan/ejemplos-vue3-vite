import { ref } from 'vue'

export function useCounter() {
    const count = ref<number>(0)

    const increment = (): void => {
        count.value++
    }

    return { count, increment }
}