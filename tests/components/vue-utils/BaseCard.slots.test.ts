import { mount } from '@vue/test-utils'
import BaseCard from '@/components/vue-utils/BaseCard.vue'

describe('BaseCard - slots', () => {
    it('renderiza el contenido del slot por defecto y del slot nombrado', () => {
        const wrapper = mount(BaseCard, {
            slots: {
                header: '<h1>Título de la tarjeta</h1>',
                default: '<p>Contenido principal</p>',
            },
        })

        expect(wrapper.get('[data-test="card-header"]').text()).toContain('Título de la tarjeta')
        expect(wrapper.get('[data-test="card-body"]').text()).toContain('Contenido principal')
    })
})