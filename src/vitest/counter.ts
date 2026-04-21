export class Counter {
    private value = 0

    increment() {
        this.value++
    }

    getValue() {
        return this.value
    }
}