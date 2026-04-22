import { mount } from '@vue/test-utils'
import HelloMessage from '@/components/vue-utils/HelloMessage.vue'

describe('HelloMessage', () => {
    it('renderiza el nombre recibido por props', () => {
        const wrapper = mount(HelloMessage, {
            props: {
                name: 'Carlos',
            },
        })

        expect(wrapper.get('[data-test="title"]').text()).toBe('Hola Carlos')
        expect(wrapper.get('[data-test="description"]').text()).toBe('Bienvenido al componente de prueba')
    })
})