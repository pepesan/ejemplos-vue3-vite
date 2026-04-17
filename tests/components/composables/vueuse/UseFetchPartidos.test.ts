import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import * as usePartidosModule from '../../../../src/composables/vueuse/usePartidos'
import UseFetchPartidos from '../../../../src/components/composables/vueuse/UseFetchPartidos.vue'

vi.mock('../../../../src/composables/vueuse/usePartidos', () => ({
    usePartidos: vi.fn(),
}))

describe('UseFetchPartidos', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('muestra el mensaje de carga', () => {
        vi.mocked(usePartidosModule.usePartidos).mockReturnValue({
            partidos: ref([]),
            error: ref(null),
            isLoading: ref(true),
        } as any)

        const wrapper = mount(UseFetchPartidos)

        expect(wrapper.text()).toContain('Cargando resultados...')
        expect(wrapper.find('table').exists()).toBe(false)
    })

    it('muestra el mensaje de error', () => {
        vi.mocked(usePartidosModule.usePartidos).mockReturnValue({
            partidos: ref([]),
            error: ref('Network Error'),
            isLoading: ref(false),
        } as any)

        const wrapper = mount(UseFetchPartidos)

        expect(wrapper.text()).toContain('Error al cargar los datos: Network Error')
        expect(wrapper.find('table').exists()).toBe(false)
    })

    it('muestra la tabla con los partidos', () => {
        vi.mocked(usePartidosModule.usePartidos).mockReturnValue({
            partidos: ref([
                { nombre: 'Partido A', imagen: 'a.png', dipu: 10 },
                { nombre: 'Partido B', imagen: 'b.png', dipu: 20 },
            ]),
            error: ref(null),
            isLoading: ref(false),
        } as any)

        const wrapper = mount(UseFetchPartidos)

        const rows = wrapper.findAll('tbody tr')

        expect(wrapper.find('table').exists()).toBe(true)
        expect(rows).toHaveLength(2)
        expect(wrapper.text()).toContain('Partido A')
        expect(wrapper.text()).toContain('10 diputados')
        expect(wrapper.text()).toContain('Partido B')
        expect(wrapper.text()).toContain('20 diputados')
    })

    it('muestra la imagen con src y alt correctos', () => {
        vi.mocked(usePartidosModule.usePartidos).mockReturnValue({
            partidos: ref([
                { nombre: 'Partido A', imagen: 'a.png', dipu: 10 },
            ]),
            error: ref(null),
            isLoading: ref(false),
        } as any)

        const wrapper = mount(UseFetchPartidos)
        const img = wrapper.get('img')

        expect(img.attributes('src')).toBe(
            'https://pactometro.cursosdedesarrollo.com/img/a.png'
        )
        expect(img.attributes('alt')).toBe('Partido A')
    })
})