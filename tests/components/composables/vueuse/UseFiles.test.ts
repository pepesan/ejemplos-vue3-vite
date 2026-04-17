import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { useFileDialog } from '@vueuse/core'
import UseFiles from '../../../../src/components/composables/vueuse/UseFiles.vue'

// mock de VueUse
vi.mock('@vueuse/core', () => ({
    useFileDialog: vi.fn()
}))

describe('UseFiles', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('no muestra archivos inicialmente', () => {
        vi.mocked(useFileDialog).mockReturnValue({
            files: ref([]),
            open: vi.fn()
        } as any)

        const wrapper = mount(UseFiles)

        expect(wrapper.find('ul').exists()).toBe(false)
    })

    it('muestra los archivos seleccionados', () => {
        const file1 = new File(['contenido'], 'test1.txt', { type: 'text/plain' })
        const file2 = new File(['contenido'], 'image.png', { type: 'image/png' })

        vi.mocked(useFileDialog).mockReturnValue({
            files: ref([file1, file2]),
            open: vi.fn()
        } as any)

        const wrapper = mount(UseFiles)

        const items = wrapper.findAll('li')

        expect(items).toHaveLength(2)
        expect(wrapper.text()).toContain('test1.txt')
        expect(wrapper.text()).toContain('image.png')
    })

    it('llama a open al hacer click en el botón', async () => {
        const openMock = vi.fn()

        vi.mocked(useFileDialog).mockReturnValue({
            files: ref([]),
            open: openMock
        } as any)

        const wrapper = mount(UseFiles)

        await wrapper.get('button').trigger('click')

        expect(openMock).toHaveBeenCalled()
    })
})