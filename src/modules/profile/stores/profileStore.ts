import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        contactEmail: 'usuario@ejemplo.com'
    }),

    actions: {
        updateEmail(newEmail: string) {
            this.contactEmail = newEmail
        }
    }
})