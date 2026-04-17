import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UsaComposableUserList from '../../../src/components/composables/UsaComposableUserList.vue'

describe('UserList', () => {
    it('muestra solo los usuarios activos al inicio', () => {
        const wrapper = mount(UsaComposableUserList)

        expect(wrapper.text()).toContain('Usuarios')
        expect(wrapper.text()).toContain('Mostrar: Activos')
        expect(wrapper.text()).toContain('Ana')
        expect(wrapper.text()).toContain('María')
        expect(wrapper.text()).not.toContain('Luis')
    })

    it('muestra todos los usuarios al pulsar el botón', async () => {
        const wrapper = mount(UsaComposableUserList)

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('Mostrar: Todos')
        expect(wrapper.text()).toContain('Ana')
        expect(wrapper.text()).toContain('Luis')
        expect(wrapper.text()).toContain('María')
    })

    it('vuelve a mostrar solo los usuarios activos al pulsar de nuevo', async () => {
        const wrapper = mount(UsaComposableUserList)

        const button = wrapper.get('button')

        await button.trigger('click')
        await button.trigger('click')

        expect(wrapper.text()).toContain('Mostrar: Activos')
        expect(wrapper.text()).toContain('Ana')
        expect(wrapper.text()).toContain('María')
        expect(wrapper.text()).not.toContain('Luis')
    })

    it('renderiza el número correcto de elementos en la lista', async () => {
        const wrapper = mount(UsaComposableUserList)

        expect(wrapper.findAll('li')).toHaveLength(2)

        await wrapper.get('button').trigger('click')

        expect(wrapper.findAll('li')).toHaveLength(3)
    })
})