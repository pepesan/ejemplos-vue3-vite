import { mount } from '@vue/test-utils'
import ParentWithChild from '@/components/vue-utils/ParentWithChild.vue'

describe('ParentWithChild - stubs manuales', () => {
    it('mockea el componente hijo', () => {
        const wrapper = mount(ParentWithChild, {
            global: {
                stubs: {
                    HeavyChild: {
                        template: '<div data-test="stub">Stub</div>',
                    },
                },
            },
        })

        expect(wrapper.get('[data-test="title"]').text()).toBe('Padre')
        expect(wrapper.find('[data-test="stub"]').exists()).toBe(true)
    })
})