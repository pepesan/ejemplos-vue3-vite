import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import FormularioYupComponent from '../../../src/components/forms/YupValidationCompositionComponent.vue'

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

describe('FormularioYupComponent.vue', () => {
    it('no muestra errores antes de enviar el formulario', () => {
        const wrapper = mount(FormularioYupComponent)

        expect(wrapper.find('.invalid-feedback').exists()).toBe(false)
        expect(wrapper.find('input').classes()).not.toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe('')
    })

    it('muestra error al enviar el formulario vacío', async () => {
        const wrapper = mount(FormularioYupComponent)

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.find('.invalid-feedback').exists()).toBe(true)
        expect(wrapper.find('.invalid-feedback').text()).toBe('El campo es obligatorio')
        expect(wrapper.find('input').classes()).toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe('')
    })

    it('actualiza la validación automáticamente tras el primer envío', async () => {
        const wrapper = mount(FormularioYupComponent)

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.find('.invalid-feedback').text()).toBe('El campo es obligatorio')

        await wrapper.find('input').setValue('ab')
        await flushPromises()
        await nextTick()

        expect(wrapper.find('.invalid-feedback').exists()).toBe(true)
        expect(wrapper.find('.invalid-feedback').text()).toBe('El nombre debe tener al menos 3 caracteres')
        expect(wrapper.find('input').classes()).toContain('is-invalid')

        await wrapper.find('input').setValue('abel')
        await flushPromises()
        await nextTick()

        expect(wrapper.find('.invalid-feedback').exists()).toBe(false)
        expect(wrapper.find('input').classes()).not.toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe(JSON.stringify({ name: 'abel' }))
    })

    it('muestra el resultado al enviar un valor válido', async () => {
        const wrapper = mount(FormularioYupComponent)

        await wrapper.find('input').setValue('Carlos')
        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.find('.invalid-feedback').exists()).toBe(false)
        expect(wrapper.find('input').classes()).not.toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe(JSON.stringify({ name: 'Carlos' }))
    })
})