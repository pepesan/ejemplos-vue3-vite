import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        user: {
            name: 'Ana'
        }
    }),
    // definimos un getter para calcular un valor en base a los estados
    getters: {
        doubleCount: (state) => state.count * 2
    },

    actions: {
        increment() {
            this.count++
        }
    }
})