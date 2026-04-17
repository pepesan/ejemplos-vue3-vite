import { describe, expect, it } from 'vitest'
import { useUsers } from '../../src/composables/useUsers'

describe('useUsers', () => {
    it('inicializa la lista de usuarios', () => {
        const { users } = useUsers()

        expect(users.value).toHaveLength(3)
        expect(users.value[0].name).toBe('Ana')
        expect(users.value[1].name).toBe('Luis')
        expect(users.value[2].name).toBe('María')
    })

    it('muestra solo los usuarios activos por defecto', () => {
        const { filteredUsers, showActive } = useUsers()

        expect(showActive.value).toBe(true)
        expect(filteredUsers.value).toHaveLength(2)
        expect(filteredUsers.value.map(user => user.name)).toEqual(['Ana', 'María'])
    })

    it('muestra todos los usuarios al desactivar el filtro', () => {
        const { filteredUsers, toggleFilter, showActive } = useUsers()

        toggleFilter()

        expect(showActive.value).toBe(false)
        expect(filteredUsers.value).toHaveLength(3)
        expect(filteredUsers.value.map(user => user.name)).toEqual(['Ana', 'Luis', 'María'])
    })

    it('vuelve a mostrar solo los usuarios activos al activar otra vez el filtro', () => {
        const { filteredUsers, toggleFilter, showActive } = useUsers()

        toggleFilter()
        toggleFilter()

        expect(showActive.value).toBe(true)
        expect(filteredUsers.value).toHaveLength(2)
        expect(filteredUsers.value.map(user => user.name)).toEqual(['Ana', 'María'])
    })
})