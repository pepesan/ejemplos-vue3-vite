import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ProfileSettingsPage from '../../../../src/modules/profile/pages/ProfileSettingsPage.vue'

describe('ProfileSettingsPage', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('muestra el título de la página', () => {
        const wrapper = mount(ProfileSettingsPage, {
            global: {
                plugins: [createPinia()]
            }
        })

        expect(wrapper.text()).toContain('Configuración del perfil')
    })

    it('muestra el email inicial del store', () => {
        const wrapper = mount(ProfileSettingsPage, {
            global: {
                plugins: [createPinia()]
            }
        })

        expect(wrapper.text()).toContain('usuario@ejemplo.com')
    })

    it('actualiza el email al pulsar el botón guardar', async () => {
        const wrapper = mount(ProfileSettingsPage, {
            global: {
                plugins: [createPinia()]
            }
        })

        const input = wrapper.get('input[type="email"]')
        await input.setValue('contacto@empresa.com')

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('contacto@empresa.com')
    })
})