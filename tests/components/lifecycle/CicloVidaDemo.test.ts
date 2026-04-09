import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CicloVidaDemo from '../../../src/components/lifecycle/CicloVidaDemo.vue'
import { nextTick } from 'vue'

describe('CicloVidaDemo', () => {

    it('renderiza el contador inicial', () => {
        const wrapper = mount(CicloVidaDemo)

        expect(wrapper.text()).toContain('Contador: 0')
    })

    it('incrementa el contador al hacer click', async () => {
        const wrapper = mount(CicloVidaDemo)

        await wrapper.find('button').trigger('click')

        expect(wrapper.text()).toContain('Contador: 1')
    })

    it('ejecuta hooks de montaje', () => {
        const spy = vi.spyOn(console, 'log')

        mount(CicloVidaDemo)

        expect(spy).toHaveBeenCalledWith('onBeforeMount')
        expect(spy).toHaveBeenCalledWith('onMounted')

        spy.mockRestore()
    })

    it('ejecuta hooks de actualización', async () => {
        const spy = vi.spyOn(console, 'log')

        const wrapper = mount(CicloVidaDemo)

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(spy).toHaveBeenCalledWith('onBeforeUpdate')
        expect(spy).toHaveBeenCalledWith('onUpdated')

        spy.mockRestore()
    })

    it('ejecuta hooks de desmontaje', () => {
        const spy = vi.spyOn(console, 'log')

        const wrapper = mount(CicloVidaDemo)

        wrapper.unmount()

        expect(spy).toHaveBeenCalledWith('onBeforeUnmount')
        expect(spy).toHaveBeenCalledWith('onUnmounted')

        spy.mockRestore()
    })
})