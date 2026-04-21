export function sum(a: number, b: number): number {
    return a + b
}

export async function asyncSum(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 100)
    })
}