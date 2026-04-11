import { mount } from '@vue/test-utils'
import EventosModificadores from '../../../src/components/events/EventosModificadores.vue'

describe('EventosModificadores.vue', () => {
    it('aplica .stop y evita que el click llegue al contenedor padre', async () => {
        const wrapper = mount(EventosModificadores)

        await wrapper.find('.stop-btn').trigger('click')

        expect(wrapper.text()).toContain('Clicks en el botón interior: 1')
        expect(wrapper.text()).toContain('Clicks en la caja exterior: 0')
    })

    it('aplica .once y solo ejecuta el evento una vez', async () => {
        const wrapper = mount(EventosModificadores)

        const button = wrapper.find('.once-btn')
        await button.trigger('click')
        await button.trigger('click')
        await button.trigger('click')

        expect(wrapper.text()).toContain('Clicks válidos en .once: 1')
    })

    it('aplica .self y solo responde al click directo sobre el contenedor', async () => {
        const wrapper = mount(EventosModificadores)

        await wrapper.find('.self-text').trigger('click')
        expect(wrapper.text()).toContain('Clicks directos en la caja (.self): 0')

        await wrapper.find('.self-box').trigger('click')
        expect(wrapper.text()).toContain('Clicks directos en la caja (.self): 1')
    })
})