import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import UserList from '../../../src/components/slots/UserList.vue';
describe('UserList', () => {
    it('renderiza un elemento de lista por cada usuario', () => {
        const wrapper = mount(UserList, {
            slots: {
                default: ({ user }) => h('p', `${user.name} - ${user.age} años`)
            }
        });
        const items = wrapper.findAll('li');
        expect(items).toHaveLength(2);
    });
    it('pasa correctamente los datos del usuario al scoped slot', () => {
        const wrapper = mount(UserList, {
            slots: {
                default: ({ user }) => h('p', `${user.name} - ${user.age} años`)
            }
        });
        expect(wrapper.text()).toContain('Ana - 25 años');
        expect(wrapper.text()).toContain('Luis - 30 años');
    });
    it('renderiza el contenido generado dentro del slot en cada li', () => {
        const wrapper = mount(UserList, {
            slots: {
                default: ({ user }) => h('span', { class: 'usuario' }, user.name)
            }
        });
        const spans = wrapper.findAll('.usuario');
        expect(spans).toHaveLength(2);
        expect(spans[0].text()).toBe('Ana');
        expect(spans[1].text()).toBe('Luis');
    });
});
