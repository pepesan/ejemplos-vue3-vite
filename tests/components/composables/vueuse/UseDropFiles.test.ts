import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useDropZone } from '@vueuse/core'
import { shallowRef } from 'vue'
import UseDropZone from '../../../../src/components/composables/vueuse/UseDropFiles.vue'

vi.mock('@vueuse/core', () => ({
    useDropZone: vi.fn(),
}))

describe('UseDropZone', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('no muestra archivos inicialmente', () => {
        vi.mocked(useDropZone).mockImplementation(() => ({
            files: shallowRef(null),
            isOverDropZone: shallowRef(false),
        }))

        const wrapper = mount(UseDropZone)

        expect(wrapper.find('ul').exists()).toBe(false)
    })

    it('muestra los archivos al hacer drop', async () => {
        const file1 = new File(['x'], 'test1.txt', { type: 'text/plain' })
        const file2 = new File(['x'], 'image.png', { type: 'image/png' })

        vi.mocked(useDropZone).mockImplementation((_target, options) => {
            if (typeof options === 'function') {
                options([file1, file2], {} as DragEvent)
            } else {
                options?.onDrop?.([file1, file2], {} as DragEvent)
            }

            return {
                files: shallowRef([file1, file2]),
                isOverDropZone: shallowRef(false),
            }
        })

        const wrapper = mount(UseDropZone)
        await wrapper.vm.$nextTick()

        const items = wrapper.findAll('li')
        expect(items).toHaveLength(2)
        expect(wrapper.text()).toContain('test1.txt')
        expect(wrapper.text()).toContain('image.png')
    })
})