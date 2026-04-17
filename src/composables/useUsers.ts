import { ref, computed } from 'vue'

interface User {
    id: number
    name: string
    active: boolean
}

export function useUsers() {
    const users = ref<User[]>([
        { id: 1, name: 'Ana', active: true },
        { id: 2, name: 'Luis', active: false },
        { id: 3, name: 'María', active: true }
    ])

    const showActive = ref<boolean>(true)

    // Procesamiento: filtrado de usuarios
    const filteredUsers = computed(() => {
        return showActive.value
            ? users.value.filter(user => user.active)
            : users.value
    })

    const toggleFilter = (): void => {
        showActive.value = !showActive.value
    }

    return {
        users,
        showActive,
        filteredUsers,
        toggleFilter
    }
}