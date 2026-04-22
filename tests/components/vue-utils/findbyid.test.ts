import { mount } from '@vue/test-utils'
import MyButton from '@/components/vue-utils/MyButton.vue'

describe('MyButton', () => {
    it('encuentra el botón por id', () => {
        const wrapper = mount(MyButton)

        const button = wrapper.find('#mi-boton')

        expect(button.exists()).toBe(true)
    })

    it('hace click en el botón', async () => {
        const wrapper = mount(MyButton)

        const button = wrapper.find('#mi-boton')
        await button.trigger('click')

        expect(button.exists()).toBe(true)
    })
})