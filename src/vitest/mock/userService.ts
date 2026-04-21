export function sendEmail(to: string): boolean {
    // simula envío real (no queremos ejecutarlo en tests)
    console.log(to)
    return true
}

export function registerUser(email: string, sendFn = sendEmail): string {
    sendFn(email)
    return 'usuario registrado'
}