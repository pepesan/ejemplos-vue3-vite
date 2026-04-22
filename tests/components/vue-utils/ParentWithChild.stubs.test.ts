import { shallowMount } from '@vue/test-utils'
import ParentWithChild from '@/components/vue-utils/ParentWithChild.vue'

describe('ParentWithChild - stubs', () => {
    it('renderiza el padre sin renderizar el hijo real', () => {
        const wrapper = shallowMount(ParentWithChild)

        // el hijo NO se renderiza realmente
        expect(wrapper.find('[data-test="heavy-child"]').exists()).toBe(false)

        // pero sigue existiendo como stub
        expect(wrapper.html()).toContain('heavy-child-stub')
    })
})