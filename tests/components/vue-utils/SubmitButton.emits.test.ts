import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/vue-utils/SubmitButton.vue'

describe('SubmitButton - emits', () => {
    it('emite el evento submit con el payload correcto al hacer click', async () => {
        const wrapper = mount(SubmitButton)

        const button = wrapper.get('[data-test="submit-btn"]')
        await button.trigger('click')

        // comprobar que el evento fue emitido
        expect(wrapper.emitted()).toHaveProperty('submit')

        // comprobar payload
        const events = wrapper.emitted('submit')
        expect(events).toHaveLength(1)
        expect(events?.[0]).toEqual(['datos-enviados'])
    })
})