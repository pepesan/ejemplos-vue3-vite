import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/vue-utils/ParentComponent.vue'
import ChildButton from '@/components/vue-utils/ChildButton.vue'

describe('ParentComponent', () => {
    it('encuentra el componente hijo y responde al evento', async () => {
        const wrapper = mount(ParentComponent)

        // localizar el componente hijo
        const child = wrapper.findComponent(ChildButton)
        expect(child.exists()).toBe(true)

        // simular evento emitido por el hijo
        await child.vm.$emit('clicked')

        // comprobar efecto en el padre
        const status = wrapper.get('[data-test="status"]')
        expect(status.text()).toBe('Pulsado')
    })
})