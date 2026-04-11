import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import axios from 'axios'
import PostAxiosFormComponent from '../../../src/components/httprequest/PostAxiosFormComponent.vue'

vi.mock('axios')

const mockedAxios = vi.mocked(axios)

describe('PostAxiosFormComponent', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('muestra errores de validación si el formulario está vacío', async () => {
        const wrapper = mount(PostAxiosFormComponent)

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(wrapper.find('#errors-title').exists()).toBe(true)
        expect(wrapper.find('#errors-title').text()).toBe('El título es obligatorio')

        expect(wrapper.find('#errors-body').exists()).toBe(true)
        expect(wrapper.find('#errors-body').text()).toBe('El contenido es obligatorio')

        expect(axios.post).not.toHaveBeenCalled()
    })

    it('envía el formulario y muestra el mensaje de éxito', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                id: 101,
                title: 'Mi título',
                body: 'Mi contenido'
            }
        })

        const wrapper = mount(PostAxiosFormComponent)

        await wrapper.find('#title').setValue('Mi título')
        await wrapper.find('#body').setValue('Mi contenido')

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(axios.post).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Mi título',
                body: 'Mi contenido'
            }
        )

        expect(wrapper.text()).toContain('¡Formulario enviado exitosamente!')
    })

    it('muestra error de envío si falla la petición', async () => {
        mockedAxios.post.mockRejectedValue(new Error('Network Error'))

        const wrapper = mount(PostAxiosFormComponent)

        await wrapper.find('#title').setValue('Mi título')
        await wrapper.find('#body').setValue('Mi contenido')

        await wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(wrapper.text()).toContain(
            'Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.'
        )
    })
})

async function flushPromises() {
    await Promise.resolve()
    await nextTick()
    await nextTick()
}