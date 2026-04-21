export class PaymentService {
    process(amount: number): boolean {
        // lógica real (simulada)
        return amount > 0
    }
}

export class OrderService {
    // @ts-ignore
    constructor(private paymentService: PaymentService) {}

    createOrder(amount: number): string {
        const success = this.paymentService.process(amount)

        if (!success) {
            throw new Error('Pago fallido')
        }

        return 'orden creada'
    }
}