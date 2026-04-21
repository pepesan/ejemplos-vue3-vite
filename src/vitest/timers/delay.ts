export function waitAndReturn(value: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

export function callAfterDelay(callback: () => void, delay: number) {
    setTimeout(() => {
        callback()
    }, delay)
}