export class Logger {
    getPrefix(): string {
        return '[LOG]'
    }

    log(message: string): string {
        return `${this.getPrefix()} ${message}`
    }
}

export class UserService {
    // @ts-ignore
    constructor(private logger: Logger) {}

    createUser(name: string): string {
        const logMessage = this.logger.log(`Creando usuario: ${name}`)
        return `Resultado: ${logMessage}`
    }
}