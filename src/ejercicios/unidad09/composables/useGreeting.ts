export function useGreeting() {
    const greeting = (): string => 'Hola mundo'

    return {
        greeting
    }
}