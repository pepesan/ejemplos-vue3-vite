import { mount } from '@vue/test-utils'
import ItemList from '@/components/vue-utils/ItemList.vue'

describe('ItemList - localización de elementos', () => {
    it('encuentra elementos usando find, get y findAll', () => {
        const wrapper = mount(ItemList, {
            props: {
                items: ['Uno', 'Dos', 'Tres'],
            },
        })

        // get → falla si no existe
        const title = wrapper.get('[data-test="title"]')
        expect(title.text()).toBe('Lista de items')

        // find → no falla, hay que comprobar
        const button = wrapper.find('[data-test="add-btn"]')
        expect(button.exists()).toBe(true)

        // findAll → múltiples elementos
        const items = wrapper.findAll('.item')
        expect(items.length).toBe(3)

        // comprobar contenido
        expect(items[0].text()).toBe('Uno')
        expect(items[1].text()).toBe('Dos')
        expect(items[2].text()).toBe('Tres')
    })
})