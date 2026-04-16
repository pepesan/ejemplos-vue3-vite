export function useFormat() {
    const currency = (
        value: number,
        locale: string = 'es-ES',
        currencyCode: string = 'EUR'
    ): string => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode,
        }).format(value)
    }

    const date = (
        value: Date | string,
        locale: string = 'es-ES'
    ): string => {
        const parsedDate = typeof value === 'string' ? new Date(value) : value

        return new Intl.DateTimeFormat(locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(parsedDate)
    }

    return {
        currency,
        date,
    }
}