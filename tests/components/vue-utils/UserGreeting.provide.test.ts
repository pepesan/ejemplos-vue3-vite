import { mount } from '@vue/test-utils'
import UserGreeting from '@/components/vue-utils/UserGreeting.vue'

describe('UserGreeting - provide/inject', () => {
    it('usa el valor proporcionado por provide', () => {
        const wrapper = mount(UserGreeting, {
            global: {
                provide: {
                    user: 'Carlos',
                },
            },
        })

        expect(wrapper.get('[data-test="greeting"]').text()).toBe('Hola Carlos')
    })

    it('usa el valor por defecto si no se proporciona', () => {
        const wrapper = mount(UserGreeting)

        expect(wrapper.get('[data-test="greeting"]').text()).toBe('Hola Invitado')
    })
})