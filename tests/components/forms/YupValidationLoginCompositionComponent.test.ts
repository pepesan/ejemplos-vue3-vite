import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import LoginYupComponent from '../../../src/components/forms/YupValidationLoginCompositionComponent.vue'

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

describe('LoginYupComponent.vue', () => {
    it('renderiza correctamente el formulario', () => {
        const wrapper = mount(LoginYupComponent)

        expect(wrapper.find('#miform').exists()).toBe(true)
        expect(wrapper.find('#username').exists()).toBe(true)
        expect(wrapper.find('#password').exists()).toBe(true)
        expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
        expect(wrapper.find('h2').text()).toBe('Iniciar Sesión')
    })

    it('muestra errores al enviar el formulario vacío', async () => {
        const wrapper = mount(LoginYupComponent)

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        const errors = wrapper.findAll('.invalid-feedback')

        expect(errors).toHaveLength(2)
        expect(errors[0].text()).toBe('El campo es obligatorio')
        expect(errors[1].text()).toBe('El campo es obligatorio')

        expect(wrapper.find('#username').classes()).toContain('is-invalid')
        expect(wrapper.find('#password').classes()).toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe('')
    })

    it('muestra errores específicos cuando los valores no cumplen el mínimo', async () => {
        const wrapper = mount(LoginYupComponent)

        await wrapper.find('#username').setValue('ab')
        await wrapper.find('#password').setValue('123456')
        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        const errors = wrapper.findAll('.invalid-feedback')
        const texts = errors.map(error => error.text())

        expect(texts).toContain('El usuario debe tener al menos 3 caracteres')
        expect(texts).toContain('La contraseña debe tener al menos 12 caracteres')

        expect(wrapper.find('#username').classes()).toContain('is-invalid')
        expect(wrapper.find('#password').classes()).toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe('')
    })

    it('envía el formulario correctamente cuando los datos son válidos', async () => {
        const wrapper = mount(LoginYupComponent)

        await wrapper.find('#username').setValue('usuario123')
        await wrapper.find('#password').setValue('password12345')
        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.findAll('.invalid-feedback')).toHaveLength(0)
        expect(wrapper.find('#username').classes()).not.toContain('is-invalid')
        expect(wrapper.find('#password').classes()).not.toContain('is-invalid')
        expect(wrapper.find('#resultado').text()).toBe('Formulario enviado exitosamente')
    })

    it('limpia los errores cuando después se envía correctamente', async () => {
        const wrapper = mount(LoginYupComponent)

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.findAll('.invalid-feedback')).toHaveLength(2)

        await wrapper.find('#username').setValue('usuario123')
        await wrapper.find('#password').setValue('password12345')
        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()
        await nextTick()

        expect(wrapper.findAll('.invalid-feedback')).toHaveLength(0)
        expect(wrapper.find('#resultado').text()).toBe('Formulario enviado exitosamente')
    })
})