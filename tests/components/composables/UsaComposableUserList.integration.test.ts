import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import UsaComposableUserList from '../../../src/components/composables/UsaComposableUserList.vue'
import * as useUsersModule from '../../../src/composables/useUsers'

vi.mock('../../../src/composables/useUsers', () => ({
    useUsers: vi.fn()
}))

describe('UsaComposableUserList con mock de useUsers', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('muestra los usuarios devueltos por el composable', () => {
        const useUsersMock = useUsersModule.useUsers as ReturnType<typeof vi.fn>

        useUsersMock.mockReturnValue({
            users: ref([
                { id: 1, name: 'Ana', active: true },
                { id: 2, name: 'Luis', active: false },
                { id: 3, name: 'María', active: true }
            ]),
            showActive: ref(true),
            filteredUsers: ref([
                { id: 1, name: 'Ana', active: true },
                { id: 3, name: 'María', active: true }
            ]),
            toggleFilter: vi.fn()
        })

        const wrapper = mount(UsaComposableUserList)

        expect(useUsersModule.useUsers).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('Mostrar: Activos')
        expect(wrapper.text()).toContain('Ana')
        expect(wrapper.text()).toContain('María')
        expect(wrapper.text()).not.toContain('Luis')
    })

    it('llama a toggleFilter al hacer clic', async () => {
        const toggleFilter = vi.fn()
        const useUsersMock = useUsersModule.useUsers as ReturnType<typeof vi.fn>

        useUsersMock.mockReturnValue({
            users: ref([
                { id: 1, name: 'Ana', active: true },
                { id: 2, name: 'Luis', active: false },
                { id: 3, name: 'María', active: true }
            ]),
            showActive: ref(true),
            filteredUsers: ref([
                { id: 1, name: 'Ana', active: true },
                { id: 3, name: 'María', active: true }
            ]),
            toggleFilter
        })

        const wrapper = mount(UsaComposableUserList)

        await wrapper.get('button').trigger('click')

        expect(toggleFilter).toHaveBeenCalledTimes(1)
    })
})