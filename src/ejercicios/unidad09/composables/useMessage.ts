import { ref } from 'vue'

export function useMessage() {
    const message = ref<string>('Hola')

    const changeMessage = (): void => {
        message.value = 'Mensaje cambiado'
    }

    return {
        message,
        changeMessage
    }
}