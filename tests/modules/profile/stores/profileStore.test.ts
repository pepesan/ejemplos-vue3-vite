import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProfileStore } from '../../../../src/modules/profile/stores/profileStore'

describe('profileStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('inicializa el email de contacto', () => {
        const store = useProfileStore()

        expect(store.contactEmail).toBe('usuario@ejemplo.com')
    })

    it('actualiza el email con la acción updateEmail', () => {
        const store = useProfileStore()

        store.updateEmail('nuevo@email.com')

        expect(store.contactEmail).toBe('nuevo@email.com')
    })
})