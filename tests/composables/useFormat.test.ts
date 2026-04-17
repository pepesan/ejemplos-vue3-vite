import { describe, expect, it } from 'vitest'
import { useFormat } from '../../src/composables/useFormat'

describe('useFormat', () => {
    it('formatea una cantidad en euros con la configuración por defecto', () => {
        const { currency } = useFormat()

        // por un problema con el espacio generado hacemos le replace
        const result = currency(1234.56).replace(/\u00A0/g, ' ')

        expect(result).toBe('1234,56 €')
    })

    it('formatea una cantidad con locale y moneda personalizados', () => {
        const { currency } = useFormat()

        expect(currency(1234.56, 'en-US', 'USD')).toBe('$1,234.56')
    })

    it('formatea una fecha a partir de un objeto Date', () => {
        const { date } = useFormat()

        expect(date(new Date('2024-01-15T00:00:00'))).toBe('15/01/2024')
    })

    it('formatea una fecha a partir de un string', () => {
        const { date } = useFormat()

        expect(date('2024-01-15')).toBe('15/01/2024')
    })

    it('formatea una fecha con locale personalizado', () => {
        const { date } = useFormat()

        expect(date('2024-01-15', 'en-US')).toBe('01/15/2024')
    })
})